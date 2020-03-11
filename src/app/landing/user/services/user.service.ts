import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private http: HttpClient) {
  }

    getValue(id) {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  onPostFeeds(value: any) {
    return this.http.post('http://localhost:3000/userpost', {value});
  }

  getFeed() {
    return this.http.get('http://localhost:3000/userpost');
  }
  postContactForm(contact) {
    return this.http.post('http://localhost:3000/contact', contact);
  }
  postFeedback(feedback) {
    return this.http.post('http://localhost:3000/feedback', feedback);
  }
  getPersonalInfo(id) {
    return this.http.get(`http://localhost:3000/additional_info/${id}`);
  }
  updateValue(id, addinfo) {
    return this.http.put(`http://localhost:3000/additional_info/${id}`, {addinfo}).pipe(res => res);
  }
}
