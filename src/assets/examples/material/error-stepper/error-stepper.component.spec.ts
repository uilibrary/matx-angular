import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorStepperComponent } from './error-stepper.component';

describe('ErrorStepperComponent', () => {
  let component: ErrorStepperComponent;
  let fixture: ComponentFixture<ErrorStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
