import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { SharedModule } from '../../shared/shared.module';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [MediaComponent, MediaDialogComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ]
})
export class MediaModule { }
