import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request;
    if (localStorage.getItem('auth')) {
      request = req.clone({
        headers: req.headers.append(
          'Authorization', localStorage.getItem('auth'))
      });
    }
    return next.handle(request || req);
  }
}
