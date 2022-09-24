import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrefixSuffixFormFieldComponent } from './prefix-suffix-form-field.component';

describe('PrefixSuffixFormFieldComponent', () => {
  let component: PrefixSuffixFormFieldComponent;
  let fixture: ComponentFixture<PrefixSuffixFormFieldComponent>;

  beforeEach(waitForAsync(() => {
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
