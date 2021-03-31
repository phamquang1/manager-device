import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { SharedModule } from '../../shared/shared.module';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [MediaComponent, MediaDialogComponent, CreateEditDialogComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class MediaModule { }
