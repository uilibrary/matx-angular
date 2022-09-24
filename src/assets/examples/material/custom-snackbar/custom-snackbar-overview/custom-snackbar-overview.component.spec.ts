import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomSnackbarOverviewComponent } from './custom-snackbar-overview.component';

describe('CustomSnackbarOverviewComponent', () => {
  let component: CustomSnackbarOverviewComponent;
  let fixture: ComponentFixture<CustomSnackbarOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSnackbarOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSnackbarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
