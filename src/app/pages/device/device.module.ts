import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateEditModalComponent } from './create-edit-modal/create-edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [DeviceComponent, CreateEditModalComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
    }),
  ]
})
export class DeviceModule { }
