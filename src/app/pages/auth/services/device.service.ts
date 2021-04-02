import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


const routers = {
  add: '/api/v1/device/add',
  account: '/api/v1/account',
  getListDevices: '/api/v1/device/list',
  updateDevice: '/api/v1/device/edit',
  deleteDevice: '/api/v1/device/delete'

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
    })
  }
  createAccount(data: any) {
    return this.http.post(this.apiUrl + routers.account, data, {})
  }
  getListDevices(data: any) {
    return this.http.post(this.apiUrl + routers.getListDevices, data, {})
  }
  updateDevice(data: any) {
    return this.http.post(this.apiUrl + routers.updateDevice, data, {})
  }
  deleteDevice(data: any) {
    return this.http.post(this.apiUrl + routers.deleteDevice, data)
  }

}
