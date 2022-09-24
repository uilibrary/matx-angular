import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomClassTooltipComponent } from './custom-class-tooltip.component';

describe('CustomClassTooltipComponent', () => {
  let component: CustomClassTooltipComponent;
  let fixture: ComponentFixture<CustomClassTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomClassTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomClassTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
