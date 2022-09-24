import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisabledDatepickerComponent } from './disabled-datepicker.component';

describe('DisabledDatepickerComponent', () => {
  let component: DisabledDatepickerComponent;
  let fixture: ComponentFixture<DisabledDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
