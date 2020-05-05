import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyFooterTableComponent } from './sticky-footer-table.component';

describe('StickyFooterTableComponent', () => {
  let component: StickyFooterTableComponent;
  let fixture: ComponentFixture<StickyFooterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyFooterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyFooterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
