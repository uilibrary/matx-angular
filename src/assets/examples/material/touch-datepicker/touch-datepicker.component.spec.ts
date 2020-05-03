import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchDatepickerComponent } from './touch-datepicker.component';

describe('TouchDatepickerComponent', () => {
  let component: TouchDatepickerComponent;
  let fixture: ComponentFixture<TouchDatepickerComponent>;

  beforeEach(async(() => {
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
