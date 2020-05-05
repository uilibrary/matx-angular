import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayTooltipComponent } from './delay-tooltip.component';

describe('DelayTooltipComponent', () => {
  let component: DelayTooltipComponent;
  let fixture: ComponentFixture<DelayTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
