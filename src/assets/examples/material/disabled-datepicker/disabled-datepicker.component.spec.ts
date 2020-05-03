import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDatepickerComponent } from './disabled-datepicker.component';

describe('DisabledDatepickerComponent', () => {
  let component: DisabledDatepickerComponent;
  let fixture: ComponentFixture<DisabledDatepickerComponent>;

  beforeEach(async(() => {
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
