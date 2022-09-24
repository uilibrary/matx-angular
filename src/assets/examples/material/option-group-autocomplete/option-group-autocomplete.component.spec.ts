import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OptionGroupAutocompleteComponent } from './option-group-autocomplete.component';

describe('OptionGroupAutocompleteComponent', () => {
  let component: OptionGroupAutocompleteComponent;
  let fixture: ComponentFixture<OptionGroupAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionGroupAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionGroupAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
