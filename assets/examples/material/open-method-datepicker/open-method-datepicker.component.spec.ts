import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMethodDatepickerComponent } from './open-method-datepicker.component';

describe('OpenMethodDatepickerComponent', () => {
  let component: OpenMethodDatepickerComponent;
  let fixture: ComponentFixture<OpenMethodDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMethodDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMethodDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
