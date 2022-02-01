import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authUser = sessionStorage.getItem('authUser');
    let token = sessionStorage.getItem('token');

    if (authUser && token) {
      req = req.clone({
        setHeaders: {
          auth: token,
        },
      });
      return next.handle(req);
    }
    return next.handle(req);
  }
}
