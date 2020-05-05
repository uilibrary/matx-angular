import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFormFieldComponent } from './label-form-field.component';

describe('LabelFormFieldComponent', () => {
  let component: LabelFormFieldComponent;
  let fixture: ComponentFixture<LabelFormFieldComponent>;

  beforeEach(async(() => {
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
