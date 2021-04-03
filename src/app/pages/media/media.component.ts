import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import Swal from 'sweetalert2';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';
import { MediaService } from '../auth/services/media.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NotificationService } from '../auth/services/notification.service';
import { Media } from '../auth/models/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  private destroyed$ = new Subject();
  isLoading: boolean = false;
  listVideos: Media[] = [];

  selectedMedia: Media;
  listArr = [1, 2, 3, 3, 5, 4];
  pageSize: number = 10;
  pageNumber: number = 1;
  totalItems: number = 10;
  user_id: any;
  username: any;
  key: any;
  constructor(
    public dialog: MatDialog,
    private mediaService: MediaService,
    private notificationService: NotificationService,
  ) {
    this.user_id = Number(localStorage.getItem('user_id'));
    this.username = localStorage.getItem('username');
    this.key = localStorage.getItem('key');
  }

  ngOnInit(): void {
    this.getListvideos();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  onClickMedia(media: Media) {
    this.selectedMedia = media;
  }
  getDataPage(event: any) {
    console.log(event);
    this.pageNumber = event;
  }
  changeVideo(event) {
    console.log(event.target.files[0])
    if (event.target.files[0]) {
      const data = {
        user_id: this.user_id,
        file: event.target.files[0],
        key: this.key
      }
      this.isLoading = true;
      const uploadVideo$ = this.mediaService.uploadVideo(data).pipe(
        tap(() => this.isLoading = true),
        takeUntil(this.destroyed$));
      uploadVideo$.subscribe((res: any) => {
        if (res.meta.code === 200) {
          this.isLoading = false;
          this.notificationService.notify(true, res.meta.message);
        }
      }, err => {
        this.isLoading = false;
        console.log(err)
        this.notificationService.notify(false, err);
      })
    }
  }
  getListvideos() {
    const data = {
      "user_id": this.user_id,
      "key": this.key
    };
    const getVideos$ = this.mediaService.listVideos(data).pipe(takeUntil(this.destroyed$));
    getVideos$.subscribe((res: any) => {
      console.log(res)
      if (res.meta.code === 200) {

        this.listVideos = res.data.Medias.map(element => {
          return {
            ...element,
            Video_size: element.Video_size / (1024 * 1024) > 1 ? Math.round((element.Video_size / (1024 * 1024)) * 10) / 10 : (element.Video_size / (1024 * 1024)).toString().substring(0, 5)
          }
        });;

      } else {

      }
    }, err => {
      this.notificationService.notify(false, err)
    });

  }
  removeMedia(media: Media) {
    Swal.fire({
      title: `Xóa ${media.Video_name} ?`,
      text: 'Bạn chắc chắn muốn xóa',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          "id": media.ID,
          "user_id": this.user_id,
          "key": this.key
        };
        const deleteVideo$ = this.mediaService.deleteVideo(data).pipe(takeUntil(this.destroyed$));
        deleteVideo$.subscribe((res: any) => {
          if (res.meta.code === 200) {
            this.notificationService.notify(true, res.meta.message);
            this.getListvideos();
          } else {

          }
        }, err => {
          this.notificationService.notify(false, err)
        });
      }
    })
  }
  openCreateEdit(media?: any) {
    if (media) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '400px';
      dialogConfig.width = '600px';

      dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
      };

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Dialog result:", result);
        }

      });
    } else {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '400px';
      dialogConfig.width = '600px';

      dialogConfig.data = {

      };

      // this.dialog.open(CourseDialogComponent, dialogConfig);
      const dialogRef = this.dialog.open(CreateEditDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log("Dialog result:", result);
        }

      });
    }
  }
  openMediaDialog(video: Media) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '400px';
    dialogConfig.width = '600px';

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    // this.dialog.open(CourseDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(MediaDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Dialog result:", result);
      }

    });
  }
  private _notify(isSuccess: boolean, message: string) {
    return Swal.fire({
      position: 'top-end',
      icon: isSuccess ? 'success' : 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

}
