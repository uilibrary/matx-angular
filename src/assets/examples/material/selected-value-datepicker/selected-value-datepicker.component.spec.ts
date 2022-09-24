import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectedValueDatepickerComponent } from './selected-value-datepicker.component';

describe('SelectedValueDatepickerComponent', () => {
  let component: SelectedValueDatepickerComponent;
  let fixture: ComponentFixture<SelectedValueDatepickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedValueDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedValueDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
