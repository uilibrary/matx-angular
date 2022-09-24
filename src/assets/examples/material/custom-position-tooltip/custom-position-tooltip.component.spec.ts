import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomPositionTooltipComponent } from './custom-position-tooltip.component';

describe('CustomPositionTooltipComponent', () => {
  let component: CustomPositionTooltipComponent;
  let fixture: ComponentFixture<CustomPositionTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPositionTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPositionTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
