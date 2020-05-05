import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledTooltipComponent } from './disabled-tooltip.component';

describe('DisabledTooltipComponent', () => {
  let component: DisabledTooltipComponent;
  let fixture: ComponentFixture<DisabledTooltipComponent>;

  beforeEach(async(() => {
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
