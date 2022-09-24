import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorFormFieldComponent } from './error-form-field.component';

describe('ErrorFormFieldComponent', () => {
  let component: ErrorFormFieldComponent;
  let fixture: ComponentFixture<ErrorFormFieldComponent>;

  beforeEach(waitForAsync(() => {
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
