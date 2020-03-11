import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  addinfoForm: FormGroup;
  firstPage = true;
  secondPage = false;

  constructor(private fb: FormBuilder, private service: AuthService, private routes: Router) {
  }

  ngOnInit() {
    this.checker();
    this.formbuilder();
  }

  checker() {
    this.service.getUserAddInfo(localStorage.getItem('id')).subscribe(res => {
      if (res != null) {
        this.routes.navigate(['./landing/user']);
      }
    }, error => {
      this.routes.navigate(['./addinfo']);
    });
  }

  formbuilder() {
    this.addinfoForm = this.fb.group({
      user_id: [undefined],
      user_name: [undefined, Validators.required],
      dob: [undefined, Validators.required],
      bookgenre: [undefined, Validators.required],
      totalread: [undefined, Validators.required],
      currentBook: [undefined, Validators.required],
      city: [undefined, Validators.required],
      dzongkha: [undefined, Validators.required]
    });
  }

  pageChange(): void {
    this.firstPage = false;
    this.secondPage = true;

  }

  signUp() {
    if (this.addinfoForm.valid) {
      this.addinfoForm.value.user_id = localStorage.getItem('id')
      this.service.sendAddinfo(this.addinfoForm.value).subscribe(res => {
        if (res) {
          this.routes.navigate(['./landing/user']);
        }
      });
    }
  }

  back(): void {
    this.secondPage = false;
    this.firstPage = true;
  }
}
