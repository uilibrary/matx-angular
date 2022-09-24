import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HintsInputComponent } from './hints-input.component';

describe('HintsInputComponent', () => {
  let component: HintsInputComponent;
  let fixture: ComponentFixture<HintsInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HintsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
