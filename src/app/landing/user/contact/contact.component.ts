import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ContactComponent implements OnInit {
  lat = 27.2864;
  lng = 91.5236;
  contactForm: FormGroup;
  private readonly notifier: NotifierService;

  constructor(private fb: FormBuilder, private service: UserService, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.formBuild();

  }

  formBuild() {
    this.contactForm = this.fb.group({
      email: [undefined, [Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required]],
      name: [undefined, Validators.required],
      phone: [undefined, Validators.required],
      location: [undefined, Validators.required],
      message: [undefined, Validators.required]
    });
  }

  onSend() {
    if (this.contactForm.valid) {
      this.service.postContactForm(this.contactForm.value).subscribe(respond => {
        if (respond) {
          this.notifier.notify('success', 'Successfully Sent');
        }
      }, error => {
        this.notifier.notify('error', 'Message failed');
      });
    } else {
      this.notifier.notify('error', 'Message failed');
    }
  }
}
