import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  @Output() sendSignForm = new EventEmitter<void>();
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  public ngOnInit(): void {
  }
  initForm() {
    this.form = this.fb.group({
      username: ['admin', Validators.required],
      password: ['default', Validators.required],
      name: ['admin', Validators.required],
      phone: ['default', Validators.required],
      code: ['admin', Validators.required],
    });
  }

  public sign(): void {
    if (this.form.valid) {
      this.sendSignForm.emit();
    }
  }
}
