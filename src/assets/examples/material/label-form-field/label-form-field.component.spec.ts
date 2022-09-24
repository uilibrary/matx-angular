import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabelFormFieldComponent } from './label-form-field.component';

describe('LabelFormFieldComponent', () => {
  let component: LabelFormFieldComponent;
  let fixture: ComponentFixture<LabelFormFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
