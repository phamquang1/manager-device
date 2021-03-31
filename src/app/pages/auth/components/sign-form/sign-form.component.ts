import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  @Output() sendSignForm = new EventEmitter<void>();
  private destroyed$ = new Subject();

  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.initForm();
  }

  public ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  initForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  public sign(): void {
    // if (this.form.valid) {
    //   this.sendSignForm.emit();
    // }
    const data = {
      "username": this.form.get('username').value,
      "password": this.form.get('password').value,
      "name": this.form.get('name').value,
      "phone": this.form.get('phone').value
    };
    const sign$ = this.authService.sign(data).pipe(takeUntil(this.destroyed$));
    sign$.subscribe((res: any) => {
      console.log(res)
    })
  }
}
