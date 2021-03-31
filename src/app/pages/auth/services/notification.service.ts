import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
  ) { }
  notify(isSuccess: boolean, title?: any) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      icon: isSuccess ? 'success' : 'error',
      title,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
