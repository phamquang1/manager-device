import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-dialog',
  templateUrl: './create-edit-dialog.component.html',
  styleUrls: ['./create-edit-dialog.component.css']
})
export class CreateEditDialogComponent implements OnInit {
  title: string;
  constructor(
    private dialogRef: MatDialogRef<CreateEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(
  ): void {
    console.log(this.data);
    this.data.id ? this.title = 'Sửa thông tin Media' : this.title = 'Thêm Media';

  }
  save() {
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }

}
