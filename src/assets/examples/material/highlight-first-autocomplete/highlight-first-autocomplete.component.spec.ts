import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HighlightFirstAutocompleteComponent } from './highlight-first-autocomplete.component';

describe('HighlightFirstAutocompleteComponent', () => {
  let component: HighlightFirstAutocompleteComponent;
  let fixture: ComponentFixture<HighlightFirstAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightFirstAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightFirstAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
