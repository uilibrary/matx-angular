import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomizedStepperComponent } from './customized-stepper.component';

describe('CustomizedStepperComponent', () => {
  let component: CustomizedStepperComponent;
  let fixture: ComponentFixture<CustomizedStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
