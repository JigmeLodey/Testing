import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private userValue = new BehaviorSubject(0);

  constructor() {
  }

  updateUser(id: number) {
    return this.userValue.next(id);
  }

  get infoUser() {
    return this.userValue.asObservable();
  }
}
