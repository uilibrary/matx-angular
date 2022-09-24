import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutoHideTooltipComponent } from './auto-hide-tooltip.component';

describe('AutoHideTooltipComponent', () => {
  let component: AutoHideTooltipComponent;
  let fixture: ComponentFixture<AutoHideTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoHideTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoHideTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
