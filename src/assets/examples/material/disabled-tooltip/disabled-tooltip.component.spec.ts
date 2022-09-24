import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisabledTooltipComponent } from './disabled-tooltip.component';

describe('DisabledTooltipComponent', () => {
  let component: DisabledTooltipComponent;
  let fixture: ComponentFixture<DisabledTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
