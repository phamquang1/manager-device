import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  selectedMedia: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onClickMedia() {
    this.selectedMedia = 1;
  }
  openCreateEdit(media: any) {
    if (media) {
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
      const dialogRef = this.dialog.open(CreateEditDialogComponent, dialogConfig);
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
      dialogConfig.width = '600px';

      dialogConfig.data = {

      };

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Dialog result:", result);
        }

      });
    }
  }
  openMediaDialog() {
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

}
