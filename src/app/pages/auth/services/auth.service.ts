import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { User } from '../models';
import { BaseApiService } from './base-api.service';

const routers = {
  login: '/login',
  account: '/api/v1/account'
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = environment.apiUrl;
  private httpHeaders = new HttpHeaders();
  private httpOptions = {};

  constructor(
    private httpClient: BaseApiService,
    private http: HttpClient,

  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      })
    };
    this.httpHeaders = new HttpHeaders(this.httpOptions);

  }
  login() {
    localStorage.setItem('token', 'token');
  }
  loginAuth(data: any) {
    return this.http.post(this.apiUrl + routers.login, data, { headers: this.httpHeaders })
    // return this.httpClient.post(routers.login, data)
  }
  // public login(data: any){
  //   localStorage.setItem('token', 'token');
  //   return this.httpClient.post(routers.login, data);
  // }

  public sign(data: any) {
    return this.httpClient.post(routers.account, data)
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
