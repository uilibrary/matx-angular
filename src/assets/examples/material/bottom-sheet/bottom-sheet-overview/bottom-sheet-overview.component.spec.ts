import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';

describe('BottomSheetOverviewComponent', () => {
  let component: BottomSheetOverviewComponent;
  let fixture: ComponentFixture<BottomSheetOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
