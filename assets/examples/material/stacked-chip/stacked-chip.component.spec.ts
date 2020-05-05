import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedChipComponent } from './stacked-chip.component';

describe('StackedChipComponent', () => {
  let component: StackedChipComponent;
  let fixture: ComponentFixture<StackedChipComponent>;

  beforeEach(async(() => {
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
