import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDatepickerComponent } from './filter-datepicker.component';

describe('FilterDatepickerComponent', () => {
  let component: FilterDatepickerComponent;
  let fixture: ComponentFixture<FilterDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
