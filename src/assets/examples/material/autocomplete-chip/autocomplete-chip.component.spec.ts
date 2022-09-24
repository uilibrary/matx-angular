import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutocompleteChipComponent } from './autocomplete-chip.component';

describe('AutocompleteChipComponent', () => {
  let component: AutocompleteChipComponent;
  let fixture: ComponentFixture<AutocompleteChipComponent>;

  beforeEach(waitForAsync(() => {
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
