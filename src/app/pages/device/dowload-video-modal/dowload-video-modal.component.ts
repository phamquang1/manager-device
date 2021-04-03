import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMqttMessage, IOnMessageEvent, MqttService } from 'ngx-mqtt';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Device } from '../../auth/models/device';
import { Media } from '../../auth/models/media';
import { MediaService } from '../../auth/services/media.service';
import { MqttDeviceService } from '../../auth/services/mqtt.service';
import { NotificationService } from '../../auth/services/notification.service';

@Component({
  selector: 'app-dowload-video-modal',
  templateUrl: './dowload-video-modal.component.html',
  styleUrls: ['./dowload-video-modal.component.css']
})
export class DowloadVideoModalComponent implements OnInit {
  private destroyed$ = new Subject();
  isLoading: boolean = false;
  listVideos: any = [1, 2, 3];
  selectedVideo: any;
  user_id: any;
  username: any;
  key: any;
  pageSize: number = 10;
  pageNumber: number = 1;
  totalItems: number = 10;
  constructor(
    private dialogRef: MatDialogRef<DowloadVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private mqttDeviceService: MqttDeviceService,
    private mqttService: MqttService,
    private mediaService: MediaService,
    private notificationService: NotificationService,


  ) {
    this.user_id = Number(localStorage.getItem('user_id'));
    this.username = localStorage.getItem('username');
    this.key = localStorage.getItem('key');
  }

  ngOnInit(): void {
    this.connected()
    this.getListvideos();

  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onClickVideo(video: Media) {
    this.selectedVideo = video;
  }
  connected() {
    console.log('before')
    this.mqttService.connect({
      connectOnCreate: true,
      hostname: 'vuaop.com',
      port: 8083,
      protocol: 'ws',
      path: '',
    })
    this.mqttService.onConnect.subscribe(res => {
    })
    this.mqttService.observe(`/v1/devices/monitor/${this.data.Mac}/request`).subscribe((res: IMqttMessage) => {
      const paload = JSON.parse(new TextDecoder('utf-8').decode(res.payload))
      if (paload["status"] === 1) {
        this.isLoading = false;
        this.notificationService.notify(true, 'Push success');
      } else {
        this.isLoading = false;
        this.notificationService.notify(true, 'Push error');
      }
    })

  }
  getListvideos() {
    const data = {
      "user_id": this.user_id,
      "key": this.key
    };
    const getVideos$ = this.mediaService.listVideos(data).pipe(takeUntil(this.destroyed$));
    getVideos$.subscribe((res: any) => {
      if (res.meta.code === 200) {
        this.listVideos = res.data.Medias;
      } else {

      }
    }, err => {
      this.notificationService.notify(false, err)
    });

  }
  onPush(video: Media) {
    const data = {
      "user_id": this.user_id,
      "key": this.key,
      "device_id": this.data.ID,
      "video_name": video.Video_name,
      "media_id": video.ID
    }
    this.isLoading = true;
    const pushVideo$ = this.mediaService.pushVideo(data).pipe(takeUntil(this.destroyed$));
    pushVideo$.subscribe((res: any) => {
      if (res.meta.code === 200) {
        this.notificationService.notify(true, res.meta.message);
        this.dialogRef.close(true);
      } else {

      }
    }, err => {
      this.isLoading = false;
      this.notificationService.notify(false, err)
    })

  }


  close() {
    this.dialogRef.close();

  }

}
