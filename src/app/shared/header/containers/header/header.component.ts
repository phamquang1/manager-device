import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Email, User } from '../../../../pages/auth/models';
import { AuthService, EmailService } from '../../../../pages/auth/services';
import { routes } from '../../../../consts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User>
  public emails$: Observable<Email[]>
  public routers: typeof routes = routes;

  constructor(
    private userService: AuthService,
    private emailService: EmailService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.user$ = this.userService.getUser();
    this.emails$ = this.emailService.loadEmails();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }
  openUnlockDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '300px';
    dialogConfig.width = '400px';

    dialogConfig.data = {

    };

    // this.dialog.open(CourseDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(UnlockDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Dialog result:", result);
      }

    });
  }

  public signOut(): void {
    this.userService.signOut();

    this.router.navigate([this.routers.LOGIN]);
  }
}
