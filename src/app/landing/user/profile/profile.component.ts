import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ProfileComponent implements OnInit {
  userValue: any;
  addValue: any;
  edit1 = false;
  edit2 = false;
  basicInfo: FormGroup;
  addform: FormGroup;


  constructor(private service: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getUserInfo();
    this.basicFormBuild();
    this.getAdditionalInfo();
  }

  basicFormBuild() {
    this.basicInfo = this.fb.group({
      name: [undefined, Validators.required],
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      gender: [undefined, Validators.required],
      phone: [undefined, Validators.required]
    });
    this.addform = this.fb.group({
      user_id: [undefined],
      user_name: [undefined, Validators.required],
      dob: [undefined, Validators.required],
      bookgenre: [undefined, Validators.required],
      totalread: [undefined, Validators.required],
      currentbook: [undefined, Validators.required],
      city: [undefined, Validators.required],
      dzongkhag: [undefined, Validators.required]
    });
  }

  getUserInfo() {
    this.service.getValue(localStorage.getItem('id')).subscribe(user => {
      this.userValue = user;
    });
  }

  getAdditionalInfo() {
    this.service.getPersonalInfo(localStorage.getItem('id')).subscribe(values => {
      this.addValue = values;
    });
  }

  onSave(val) {
    if (val === 1) {
      this.edit1 = false;
    } else {
      this.edit2 = false;
      this.addform.value.user_id = localStorage.getItem('id');
      this.service.updateValue(localStorage.getItem('id'), this.addform.value).subscribe(respond => {
        if (respond != null) {
          alert('hello');
        }
      });
    }
  }

  onEdit(val) {
    if (val === 1) {
      this.edit1 = true;
      this.edit2 = false;
      this.basicInfo.patchValue({
        name: this.userValue.name,
        email: this.userValue.email,
        gender: this.userValue.gender,
        phone: this.userValue.phone
      });
    } else {
      this.edit2 = true;
      this.edit1 = false;
      this.addform.patchValue({
        user_name: this.addValue.user_name,
        dob: this.addValue.dob,
        bookgenre: this.addValue.bookgenre,
        currentbook: this.addValue.currentBook,
        totalread: this.addValue.totalread,
        city: this.addValue.city,
        dzongkhag: this.addValue.dzongkha
      });
    }
  }
}
