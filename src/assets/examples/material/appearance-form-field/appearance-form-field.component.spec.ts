import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppearanceFormFieldComponent } from './appearance-form-field.component';

describe('AppearanceFormFieldComponent', () => {
  let component: AppearanceFormFieldComponent;
  let fixture: ComponentFixture<AppearanceFormFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearanceFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearanceFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
