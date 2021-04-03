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
    request = request.clone({
      setHeaders: {
        'api-key': environment.apiKey,
        'Authorization': `api-key ${apiKey}`,
        // 'Access-Control-Allow-Origin': '*',
        // 'Cache-Control': 'no-cache',
      }
    });
    return next.handle(request);
  }
}
