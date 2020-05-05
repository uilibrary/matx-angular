import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedValueDatepickerComponent } from './selected-value-datepicker.component';

describe('SelectedValueDatepickerComponent', () => {
  let component: SelectedValueDatepickerComponent;
  let fixture: ComponentFixture<SelectedValueDatepickerComponent>;

  beforeEach(async(() => {
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
