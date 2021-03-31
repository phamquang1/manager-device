import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = environment.apiKey;
    if (apiKey) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'api-key': apiKey
      })
      const cloneRequest = request.clone({ headers })
      return next.handle(request);
    }

  }
}
