import {Component, OnInit} from '@angular/core';
import {UserStateService} from '../UserState.service';
import {UserService} from '../services/user.service';
import {filter, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class UserProfileComponent implements OnInit {
  userId: any;
  users: any;
  additionInfo: any;

  constructor(private state: UserStateService, private service: UserService, private routes: Router) {
  }

  ngOnInit() {
    this.getUser();
    this.getAdditionalInfo();
  }

  getUser() {
    this.state.infoUser.pipe(filter(value => value != null), tap(id => {
      this.userId = id;
    }), switchMap(id => this.service.getValue(id))).subscribe(user => {
      this.users = user;
    });
  }

  getAdditionalInfo() {
    this.state.infoUser.pipe(filter(value => value != null), tap(id => {
      this.userId = id;
    }), switchMap(id => this.service.getPersonalInfo(id))).subscribe(user => {
      this.additionInfo = user;
    });
  }
}
