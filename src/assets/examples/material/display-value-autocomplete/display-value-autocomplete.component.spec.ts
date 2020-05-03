import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValueAutocompleteComponent } from './display-value-autocomplete.component';

describe('DisplayValueAutocompleteComponent', () => {
  let component: DisplayValueAutocompleteComponent;
  let fixture: ComponentFixture<DisplayValueAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayValueAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayValueAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
