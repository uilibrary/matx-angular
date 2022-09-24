import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventDatepickerComponent } from './event-datepicker.component';

describe('EventDatepickerComponent', () => {
  let component: EventDatepickerComponent;
  let fixture: ComponentFixture<EventDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
