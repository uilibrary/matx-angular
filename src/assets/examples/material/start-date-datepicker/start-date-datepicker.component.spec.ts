import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StartDateDatepickerComponent } from './start-date-datepicker.component';

describe('StartDateDatepickerComponent', () => {
  let component: StartDateDatepickerComponent;
  let fixture: ComponentFixture<StartDateDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDateDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDateDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
