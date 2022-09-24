import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleAutocompleteComponent } from './simple-autocomplete.component';

describe('SimpleAutocompleteComponent', () => {
  let component: SimpleAutocompleteComponent;
  let fixture: ComponentFixture<SimpleAutocompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
