import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDatepickerComponent } from './event-datepicker.component';

describe('EventDatepickerComponent', () => {
  let component: EventDatepickerComponent;
  let fixture: ComponentFixture<EventDatepickerComponent>;

  beforeEach(async(() => {
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
