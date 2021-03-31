import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService
  ) { }
  notify(status: boolean, message?: any, title?: any) {
    if (status) {
      this.toastr.success(message, title, {
        positionClass: 'toast-bottom-right'
      });

    } else {
      this.toastr.error(message, title, {
        positionClass: 'toast-bottom-right'
      });

    }
  }
}
