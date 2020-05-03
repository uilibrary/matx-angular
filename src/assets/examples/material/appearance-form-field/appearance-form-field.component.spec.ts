import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceFormFieldComponent } from './appearance-form-field.component';

describe('AppearanceFormFieldComponent', () => {
  let component: AppearanceFormFieldComponent;
  let fixture: ComponentFixture<AppearanceFormFieldComponent>;

  beforeEach(async(() => {
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
