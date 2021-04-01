import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


const routers = {
  add: '/api/v1/device/add',
};
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,

  ) { }

  createDevice(data: any) {
    return this.http.post(this.apiUrl + routers.add, data, {
      // headers: new HttpHeaders({
      //   key: 'heloo'
      // })
    })
  }
}
