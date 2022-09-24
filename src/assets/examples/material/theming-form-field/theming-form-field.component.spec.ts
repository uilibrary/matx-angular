import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemingFormFieldComponent } from './theming-form-field.component';

describe('ThemingFormFieldComponent', () => {
  let component: ThemingFormFieldComponent;
  let fixture: ComponentFixture<ThemingFormFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemingFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemingFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
