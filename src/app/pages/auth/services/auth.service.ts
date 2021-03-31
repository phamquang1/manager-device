import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models';
import { BaseApiService } from './base-api.service';

const routers = {
  login: '/login'
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: BaseApiService
  ) {

  }
  login() {
    localStorage.setItem('token', 'token');
  }
  loginAuth(data: any) {
    return this.httpClient.post(routers.login, data)
  }
  // public login(data: any){
  //   localStorage.setItem('token', 'token');
  //   return this.httpClient.post(routers.login, data);
  // }

  public sign() {
    localStorage.setItem('token', 'token');
  }

  public signOut() {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }
}
