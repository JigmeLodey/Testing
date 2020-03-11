import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  postUserRegistration(user) {
    return this.http.post(`${environment.api}/users`, {user});
  }

  postUserLogin(user) {
    return this.http.post(`${environment.api}/users/sign_in`, {user}, {observe: 'response'});
  }
  getUserAddInfo(id) {
    return this.http.get(`http://localhost:3000/additional_info/${id}`);
  }
  sendAddinfo(addinfo) {
    return this.http.post('http://localhost:3000/additional_info', addinfo);
  }
}
