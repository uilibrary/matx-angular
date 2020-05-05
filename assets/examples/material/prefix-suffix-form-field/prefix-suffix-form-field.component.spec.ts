import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixSuffixFormFieldComponent } from './prefix-suffix-form-field.component';

describe('PrefixSuffixFormFieldComponent', () => {
  let component: PrefixSuffixFormFieldComponent;
  let fixture: ComponentFixture<PrefixSuffixFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefixSuffixFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixSuffixFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
