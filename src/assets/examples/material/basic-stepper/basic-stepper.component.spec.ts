import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicStepperComponent } from './basic-stepper.component';

describe('BasicStepperComponent', () => {
  let component: BasicStepperComponent;
  let fixture: ComponentFixture<BasicStepperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
