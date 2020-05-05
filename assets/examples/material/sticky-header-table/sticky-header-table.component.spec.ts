import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyHeaderTableComponent } from './sticky-header-table.component';

describe('StickyHeaderTableComponent', () => {
  let component: StickyHeaderTableComponent;
  let fixture: ComponentFixture<StickyHeaderTableComponent>;

  beforeEach(async(() => {
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
