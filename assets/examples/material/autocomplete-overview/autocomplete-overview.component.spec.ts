import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOverviewComponent } from './autocomplete-overview.component';

describe('AutocompleteOverviewComponent', () => {
  let component: AutocompleteOverviewComponent;
  let fixture: ComponentFixture<AutocompleteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
