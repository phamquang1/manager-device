import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Device } from '../auth/models/device';
import { DeviceService } from '../auth/services/device.service';
import { NotificationService } from '../auth/services/notification.service';
import { MediaDialogComponent } from '../media/media-dialog/media-dialog.component';
import { CreateEditModalComponent } from './create-edit-modal/create-edit-modal.component';
import { DowloadVideoModalComponent } from './dowload-video-modal/dowload-video-modal.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  private destroyed$ = new Subject();
  listDevices: Device[] = [];
  selectedDevice: Device;
  pageSize: number = 10;
  pageNumber: number = 1;
  totalItems: number = 10;
  user_id: any;
  username: any;
  key: any;
  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService,
    private deviceService: DeviceService,

  ) {
    this.user_id = Number(localStorage.getItem('user_id'));
    this.username = localStorage.getItem('username');
    this.key = localStorage.getItem('key');

  }

  ngOnInit(): void {

    this.getListDevices();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onClickDevice(device: Device) {
    this.selectedDevice = device;

  }
  getDataPage(event: any) {
    console.log(event);
    this.pageNumber = event;
  }
  getListDevices() {
    const getDevices$ = this.deviceService.getListDevices({
      "user_id": this.user_id,
      "username": this.username,
      "key": this.key

    }).pipe(takeUntil(this.destroyed$));
    getDevices$.subscribe((res: any) => {
      this.listDevices = res.data.Devices
    });
  }
  removeDevice(device: Device) {
    Swal.fire({
      title: `Xóa ${device.Device_name} ?`,
      text: 'Bạn chắc chắn muốn xóa',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          "user_id": this.user_id,
          "mac": device.Mac,
          "key": this.key
        };
        const deleteDevice$ = this.deviceService.deleteDevice(data).pipe(takeUntil(this.destroyed$));
        deleteDevice$.subscribe((res: any) => {
          if (res.meta.code === 200) {
            this.notificationService.notify(true, res.meta.message);
            this.getListDevices();
            this.selectedDevice = {} as Device;
          }
        }, err => {
          this.notificationService.notify(false, err);
        });
      }
    });
  }
  openCreateEditDialog(device?: Device) {
    if (device) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '400px';
      dialogConfig.width = '800px';

      dialogConfig.data = device;

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getListDevices();
        }

      });
    } else {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '440px';
      dialogConfig.width = '800px';

      dialogConfig.data = {

      } as Device;

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getListDevices();
        }

      });
    }

  }
  openDowloadDialog(device: Device) {
    if (device) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '400px';
      dialogConfig.width = '800px';

      dialogConfig.data = device;

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(DowloadVideoModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('call api list', result);

        }

      });
    } else {
      this.notificationService.notify(false, 'Bạn chưa chọn video !')
    }
  }
  openMediaDialog(video: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    // this.dialog.open(CourseDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(MediaDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Dialog result:", result);
      }

    });
  }
  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      icon: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  tranform(status: number) {
    if (status === 1) {
      return 'Hoạt động'
    }
    if (status === 0) {
      return 'Lỗi'
    }
  }


}
