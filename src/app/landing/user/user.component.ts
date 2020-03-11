import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {UserStateService} from './UserState.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private service: UserService, private routes: Router, private state: UserStateService) {
  }

  ngOnInit() {
  }

  navigate(value) {
    if (value === 'profile') {
      this.routes.navigate(['/landing/user/profile']);
    } else if (value === 'contact') {
      this.routes.navigate(['landing/user/contact']);
    } else if (value === 'feedback') {
      this.routes.navigate(['/landing/user/feedback']);
    } else {
      this.routes.navigate(['/landing/user']);
    }
  }

  featureNavigate(value: string): void {
    if (value === 'share') {
      this.routes.navigate(['/landing/user/roll']);
    } else if (value === 'donate') {
      this.routes.navigate(['/landing/user/dbook']);
    } else if (value === 'give') {
      this.routes.navigate(['/landing/user/give']);
    } else {
      this.routes.navigate(['/landing/user/store']);
    }
  }

  signOut() {
    localStorage.clear();
    this.routes.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
