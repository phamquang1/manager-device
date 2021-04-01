import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { Device } from '../../auth/models/device';
import { DeviceService } from '../../auth/services/device.service';
import { NotificationService } from '../../auth/services/notification.service';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.css']
})
export class CreateEditModalComponent implements OnInit {
  title: string;
  public form: FormGroup;
  private destroyed$ = new Subject();

  public lat = 21.0227788;
  public lng = 105.8194541;
  public zoom = 15;
  user_id: any;
  username: any;
  key: any;
  constructor(
    private dialogRef: MatDialogRef<CreateEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private deviceService: DeviceService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
  ) {
    this.initForm();
    this.user_id = Number(localStorage.getItem('user_id'));
    this.username = localStorage.getItem('username');
    this.key = localStorage.getItem('key');
  }

  ngOnInit() {

    this.data.ID ? this.title = 'Sửa thông tin device' : this.title = 'Thêm device';
    if (this.data.ID) {
      console.log(this.data);
      this.form.patchValue({
        device_name: this.data.Device_name,
        location: this.data.Location,
        long: 105.8194541,
        lat: 21.0227788
      });
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  initForm() {
    this.form = this.fb.group({
      device_name: ['', Validators.required],
      location: ['', Validators.required],
      long: ['', Validators.required],
      lat: ['', Validators.required],
      mac: ['', Validators.required]
    });
  }
  save() {
    let device = {
      "user_id": this.user_id,
      "mac": this.data.ID ? this.data.Mac : this.form.get('mac').value,
      "device_name": this.form.get('device_name').value,
      "location": this.form.get('location').value,
      "key": localStorage.getItem("key")
    }
    if (this.data.ID) {
      const update$ = this.deviceService.updateDevice(device).pipe(
        takeUntil(this.destroyed$));
      update$.subscribe((res: any) => {
        console.log(res, 'update')
        if (res.meta.code === 200) {
          this.dialogRef.close(true);
          this.notificationService.notify(true, res.meta.message)
        }
      });
    } else {
      const create$ = this.deviceService.createDevice(device).pipe(
        takeUntil(this.destroyed$))
      create$.subscribe((res: any) => {
        console.log(res, 'create')
        if (res.meta.code === 200) {
          this.dialogRef.close(true);
          this.notificationService.notify(true, res.meta.message)
        }
      })
    }

  }

  close() {
    this.dialogRef.close();

  }
  onMapClick(event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.form.patchValue({
      long: event.coords.lng,
      lat: event.coords.lat
    });
  }

}
