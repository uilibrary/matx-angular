import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StackedChipComponent } from './stacked-chip.component';

describe('StackedChipComponent', () => {
  let component: StackedChipComponent;
  let fixture: ComponentFixture<StackedChipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
