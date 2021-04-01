import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DashboardService } from '../../services';
import {
  DailyLineChartData,
  PerformanceChartData,
  ProjectStatData,
  RevenueChartData,
  ServerChartData,
  SupportRequestData,
  VisitsChartData
} from '../../models';
import { Device } from 'src/app/pages/auth/models/device';
import { DeviceService } from 'src/app/pages/auth/services/device.service';
import { NotificationService } from 'src/app/pages/auth/services/notification.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  private destroyed$ = new Subject();
  listDevices: Device[] = [];
  user_id: any;
  username: any;
  key: any;
  public dailyLineChartData$: Observable<DailyLineChartData>;
  public performanceChartData$: Observable<PerformanceChartData>;
  public revenueChartData$: Observable<RevenueChartData>;
  public serverChartData$: Observable<ServerChartData>;
  public supportRequestData$: Observable<SupportRequestData[]>;
  public visitsChartData$: Observable<VisitsChartData>;
  public projectsStatsData$: Observable<ProjectStatData>;

  constructor(
    private service: DashboardService,
    private notificationService: NotificationService,
    private deviceService: DeviceService,
  ) {
    this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    this.performanceChartData$ = this.service.loadPerformanceChartData();
    this.revenueChartData$ = this.service.loadRevenueChartData();
    this.serverChartData$ = this.service.loadServerChartData();
    this.supportRequestData$ = this.service.loadSupportRequestData();
    this.visitsChartData$ = this.service.loadVisitsChartData();
    this.projectsStatsData$ = this.service.loadProjectsStatsData();



    this.user_id = Number(localStorage.getItem('user_id'));
    this.username = localStorage.getItem('username');
    this.key = localStorage.getItem('key');
  }
  ngOnInit(): void {

    this.getListDevices();

  }
  getListDevices() {
    const getDevices$ = this.deviceService.getListDevices({
      "user_id": this.user_id,
      "username": this.username,
      "key": this.key

    }).pipe(takeUntil(this.destroyed$));
    getDevices$.subscribe((res: any) => {
      console.log(res)
      this.listDevices = res.data.Devices;
      this.listDevices[1].Status = 0;
    });
  }
}
