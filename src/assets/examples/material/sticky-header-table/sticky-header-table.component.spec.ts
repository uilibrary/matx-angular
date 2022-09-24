import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StickyHeaderTableComponent } from './sticky-header-table.component';

describe('StickyHeaderTableComponent', () => {
  let component: StickyHeaderTableComponent;
  let fixture: ComponentFixture<StickyHeaderTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyHeaderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyHeaderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
