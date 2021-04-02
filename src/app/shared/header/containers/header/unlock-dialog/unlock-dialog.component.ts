import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-unlock-dialog',
  templateUrl: './unlock-dialog.component.html',
  styleUrls: ['./unlock-dialog.component.css']
})
export class UnlockDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UnlockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.form = this.fb.group({
      code: ['VN-VINFAST', Validators.required],
    });
  }
  save() {
    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }

}
