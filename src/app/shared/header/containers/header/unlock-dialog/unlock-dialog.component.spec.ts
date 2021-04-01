import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockDialogComponent } from './unlock-dialog.component';

describe('UnlockDialogComponent', () => {
  let component: UnlockDialogComponent;
  let fixture: ComponentFixture<UnlockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
