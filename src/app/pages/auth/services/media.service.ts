import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { mapToFormData } from '../helpers/helpers';

const routers = {
  uploadVideo: '/api/v1/media/add',
  getListVideos: '/api/v1/media/list',
  deleteVideo: '/api/v1/media/delete',
  pushVideo: '/api/v1/device/push',


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
    console.log(formData)
    return this.http.post(this.apiUrl + routers.uploadVideo, formData);
  }
  listVideos(data: any) {
    return this.http.post(this.apiUrl + routers.getListVideos, data);
  }
  deleteVideo(data: any) {
    return this.http.post(this.apiUrl + routers.deleteVideo, data);
  }
  pushVideo(data: any) {
    return this.http.post(this.apiUrl + routers.pushVideo, data);
  }

}
