import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private notificationService: NotificationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err, 'hihihiih')
      this.notificationService.notify(false, err.message)
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        // this.authenticationService.logout();
        // location.reload();
      }
      if (err.status === 400) {
        // this.errorService.showError(err.error.error_description);
        console.log(err)
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
