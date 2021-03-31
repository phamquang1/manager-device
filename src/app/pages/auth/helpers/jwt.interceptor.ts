import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = localStorage.getItem('key');
    console.log(apiKey)
    if (apiKey) {
      request = request.clone({
        setHeaders: {
          'Authorization': `${apiKey}`
        }
      });
    }
    return next.handle(request);
  }
}
