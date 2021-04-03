import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from 'rxjs';
import { Device } from '../models/device';


@Injectable({
  providedIn: 'root'
})
export class MqttDeviceService {
  private endpoint: string;
  constructor(
    private mqttService: MqttService,
  ) {
    this.endpoint = '/v1/devices/monitor';
  }

  topic(device: Device): Observable<IMqttMessage> {
    let topicName = `/${this.endpoint}/${device.Mac}/telemetry`;
    return this.mqttService.observe(topicName);
  }
  pushVideo(): Observable<IMqttMessage> {
    return this.mqttService.observe(this.endpoint);
  }
}
