import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {NotifierService} from 'angular-notifier';
import {UserStateService} from '../UserState.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class FeedsComponent implements OnInit {
  postForm: FormGroup;
  id: any;
  users: any;
  feed: any;
  name: string;
  private readonly notifier: NotifierService;

  constructor(private routes: Router, private fb: FormBuilder, private service: UserService, private notifierService: NotifierService, private state: UserStateService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.formBuild();
    this.getFeed();
    this.getUserInfo();
  }

  getUserInfo() {
    this.service.getPersonalInfo(localStorage.getItem('id')).subscribe(user => {
      this.users = user;
      this.name = this.users.user_name;
    });
  }

  formBuild() {
    this.postForm = this.fb.group({
      user_id: [undefined],
      user_name: [''],
      post: [undefined, Validators.required]
    });
  }

  post() {
    this.postForm.value.user_id = localStorage.getItem('id');
    this.postForm.value.user_name = this.name;
    if (this.postForm.valid) {
      this.service.onPostFeeds(this.postForm.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Post Success');
          this.postForm.reset();
        }
      });
    }
  }

  getFeed() {
    this.service.getFeed().subscribe(res => {
      this.feed = res;
    });
  }

  user(id) {
    this.state.updateUser(id);
    this.routes.navigate(['./landing/user/userProfile']);
  }
}
