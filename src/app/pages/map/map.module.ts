import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8EWR3BrJjN9HsVT5wQiq_rPGgrwtKfjY'
    }),
  ]
})
export class MapModule { }
