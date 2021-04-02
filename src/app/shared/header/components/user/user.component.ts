import { Component, EventEmitter, Input, Output } from '@angular/core';

import { routes } from '../../../../consts';
import { User } from '../../../../pages/auth/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public Email: string = "";
  username: string;
  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
  public signOutEmit() {
    this.signOut.emit();
  }
}
