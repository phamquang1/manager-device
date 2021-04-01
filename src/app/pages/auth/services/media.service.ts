import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { mapToFormData } from '../helpers/helpers';

const routers = {
  uploadVideo: '/api/v1/device/upload',
};

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  public apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }
  uploadVideo(data: any) {
    const formData = mapToFormData(data);
    console.log(formData, 'formdata ')
    return this.http.post(this.apiUrl + routers.uploadVideo, formData);
  }
}
