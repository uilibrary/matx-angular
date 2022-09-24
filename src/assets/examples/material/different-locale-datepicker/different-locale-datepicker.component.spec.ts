import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DifferentLocaleDatepickerComponent } from './different-locale-datepicker.component';

describe('DifferentLocaleDatepickerComponent', () => {
  let component: DifferentLocaleDatepickerComponent;
  let fixture: ComponentFixture<DifferentLocaleDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentLocaleDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentLocaleDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
