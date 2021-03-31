import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  private destroyed$ = new Subject();


  public form: FormGroup;
  public flatlogicEmail = 'admin@flatlogic.com';
  public flatlogicPassword = 'admin';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,

  ) {

  }

  public ngOnInit(): void {
    this.initForm();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
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
  loginAuth() {
    const data = {
      "username": this.form.get('email').value,
      "password": this.form.get('password').value
    };
    const login$ = this.authService.loginAuth(data).pipe(
      takeUntil(this.destroyed$)
    );
    login$.subscribe((res: any) => {
      console.log(res);

      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(res.data.tocken);
      localStorage.setItem('key', decodedToken.key);
      console.log(res);
      if (res && res.meta.code === 200) {
        this.router.navigate(['/dashboard']);
        this.notificationService.notify(true, res.meta.message);

      } else {
        this.notificationService.notify(false, res.meta.message);

      }
    })
  }

}
