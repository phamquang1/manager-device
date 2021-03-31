import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../auth/services/notification.service';
import { CreateEditModalComponent } from './create-edit-modal/create-edit-modal.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  selectedDevice: any;
  constructor(
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }
  onClickDevice() {
    this.selectedDevice = 1;
  }
  removeDevice(device: any) {
    this.notificationService.notify(false, 'delete', 'delete')
  }
  openCreateEditDialog(device?: any) {
    if (device) {
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
      const dialogRef = this.dialog.open(CreateEditModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Dialog result:", result);
        }

      });
    } else {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '400px';
      dialogConfig.width = '800px';

      dialogConfig.data = {

      };

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditModalComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Dialog result:", result);
        }

      });
    }

  }

}
