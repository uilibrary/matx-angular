import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightFirstAutocompleteComponent } from './highlight-first-autocomplete.component';

describe('HighlightFirstAutocompleteComponent', () => {
  let component: HighlightFirstAutocompleteComponent;
  let fixture: ComponentFixture<HighlightFirstAutocompleteComponent>;

  beforeEach(async(() => {
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
