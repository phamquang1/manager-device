import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public form: FormGroup;
  public flatlogicEmail = 'admin@flatlogic.com';
  public flatlogicPassword = 'admin';
  constructor(
    private fb: FormBuilder
  ) {

  }

  public ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.fb.group({
      email: ['admin', Validators.required],
      password: ['default', Validators.required]
    });
  }

  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit();
    }
  }
}
