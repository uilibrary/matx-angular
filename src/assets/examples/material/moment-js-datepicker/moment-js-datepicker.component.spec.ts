import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MomentJsDatepickerComponent } from './moment-js-datepicker.component';

describe('MomentJsDatepickerComponent', () => {
  let component: MomentJsDatepickerComponent;
  let fixture: ComponentFixture<MomentJsDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentJsDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentJsDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
