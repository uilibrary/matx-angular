import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterAutocompleteComponent } from './filter-autocomplete.component';

describe('FilterAutocompleteComponent', () => {
  let component: FilterAutocompleteComponent;
  let fixture: ComponentFixture<FilterAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
