import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateEditModalComponent } from './create-edit-modal/create-edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DowloadVideoModalComponent } from './dowload-video-modal/dowload-video-modal.component';




@NgModule({
  declarations: [DeviceComponent, CreateEditModalComponent, DowloadVideoModalComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8EWR3BrJjN9HsVT5wQiq_rPGgrwtKfjY'
    }),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DeviceModule { }
