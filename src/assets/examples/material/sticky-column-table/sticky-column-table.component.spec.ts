import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyColumnTableComponent } from './sticky-column-table.component';

describe('StickyColumnTableComponent', () => {
  let component: StickyColumnTableComponent;
  let fixture: ComponentFixture<StickyColumnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyColumnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyColumnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
