import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = localStorage.getItem('key');
    console.log(apiKey)
    request = request.clone({
      setHeaders: {
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, X-Max",
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE, UPDATE",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Request-Headers": "",
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Access-Control-Allow-Origin': '*',
        // 'Cache-Control': 'no-cache',
        'api-key': environment.apiKey,
        'Authorization': `api-key ${apiKey}`
      }
    });
    // if (apiKey) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Authorization': ` bearer ${apiKey}`
    //     }
    //   });
    // }
    return next.handle(request);
  }
}
