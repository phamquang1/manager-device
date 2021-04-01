import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceService } from '../../auth/services/device.service';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.css']
})
export class CreateEditModalComponent implements OnInit {
  title: string;
  public lat = 21.0227788;
  public lng = 105.8194541;
  public zoom = 12;
  constructor(
    private dialogRef: MatDialogRef<CreateEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.data.id ? this.title = 'Sửa thông tin device' : this.title = 'Thêm device';
  }
  save() {
    const data = {
      "user_id": 2,
      "mac": "er:34:45:e4",
      "device_name": "phong ngu",
      "location": "Ha noi",
      "key": localStorage.getItem("key")
    }
    const create$ = this.deviceService.createDevice(data)
    create$.subscribe((res: any) => {
      console.log(res)
    })
    // this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }

}
