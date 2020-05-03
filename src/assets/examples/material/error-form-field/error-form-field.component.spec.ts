import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFormFieldComponent } from './error-form-field.component';

describe('ErrorFormFieldComponent', () => {
  let component: ErrorFormFieldComponent;
  let fixture: ComponentFixture<ErrorFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
