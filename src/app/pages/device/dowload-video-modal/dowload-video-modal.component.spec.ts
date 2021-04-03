import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadVideoModalComponent } from './dowload-video-modal.component';

describe('DowloadVideoModalComponent', () => {
  let component: DowloadVideoModalComponent;
  let fixture: ComponentFixture<DowloadVideoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowloadVideoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
