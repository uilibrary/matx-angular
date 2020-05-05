import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsFormFieldComponent } from './hints-form-field.component';

describe('HintsFormFieldComponent', () => {
  let component: HintsFormFieldComponent;
  let fixture: ComponentFixture<HintsFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintsFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
