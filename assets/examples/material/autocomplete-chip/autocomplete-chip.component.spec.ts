import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteChipComponent } from './autocomplete-chip.component';

describe('AutocompleteChipComponent', () => {
  let component: AutocompleteChipComponent;
  let fixture: ComponentFixture<AutocompleteChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
