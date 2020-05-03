import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDateDatepickerComponent } from './start-date-datepicker.component';

describe('StartDateDatepickerComponent', () => {
  let component: StartDateDatepickerComponent;
  let fixture: ComponentFixture<StartDateDatepickerComponent>;

  beforeEach(async(() => {
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
