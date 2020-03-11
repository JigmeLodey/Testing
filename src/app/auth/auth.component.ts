import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from './services/auth.service';
import {HttpHeaderResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [
    './auth.component.scss',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  createForm: FormGroup;
  create = false;
  page = false;
  error: any;
  forgot = false;
  private readonly notifier: NotifierService;
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService, private routes: Router, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.initLoginForm();
    this.initSignUp();
    this.initForgotForm();
  }


  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [undefined, Validators.required]
    });
  }

  initSignUp() {
    this.createForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      name: [undefined, Validators.required],
      username: [undefined],
      password: [undefined, Validators.required],
      gender: [undefined, Validators.required],
      phone: [undefined, [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      roles: ['member']
    });
  }

  initForgotForm() {
    this.forgotForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]
    });
  }

  singIn() {
    if (this.loginForm.valid) {
      this.service.postUserLogin(this.loginForm.value).subscribe((response: any) => {
        if (response.body.roles === 'admin') {
          localStorage.setItem('auth', response.headers.get('Authorization'));
          this.routes.navigate(['./landing/admin']);
        } else {
          localStorage.setItem('auth', response.headers.get('Authorization'));
          localStorage.setItem('id', response.body.id);
          this.routes.navigate(['./addinfo']);
        }
      }, error => {
        this.error = error.error.error;

        this.notifier.notify('error', this.error);
      });
    }
  }

  Forgot() {
    this.forgot = true;

  }

  signUpPage() {
    this.create = true;
    this.forgot = false;
    this.loginForm.reset();
  }

  back(val) {
    if (val === 'login') {
      this.createForm.reset();
      this.forgotForm.reset();
      this.create = false;
      this.forgot = false;
    } else {
      this.page = false;
    }
  }

  pageChange() {
    this.page = true;
  }

  sendMail() {


  }

  signUp() {
    if (this.createForm.valid) {
      this.service.postUserRegistration(this.createForm.value).subscribe(res => {
        const response = res;
        if (response) {
          this.notifier.notify('success', 'Create Success');
          this.create = false;
        }
      }, error => {
        if (error.error.exception) {
          const tempError = error.error.exception.split(': ');
          this.notifier.notify('error', tempError[tempError.length - 1].slice(0, -1));
        }
      });
    }
  }
}
