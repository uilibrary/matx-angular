import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TouchDatepickerComponent } from './touch-datepicker.component';

describe('TouchDatepickerComponent', () => {
  let component: TouchDatepickerComponent;
  let fixture: ComponentFixture<TouchDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
