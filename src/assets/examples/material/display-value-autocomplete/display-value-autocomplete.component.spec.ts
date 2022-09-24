import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayValueAutocompleteComponent } from './display-value-autocomplete.component';

describe('DisplayValueAutocompleteComponent', () => {
  let component: DisplayValueAutocompleteComponent;
  let fixture: ComponentFixture<DisplayValueAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
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
