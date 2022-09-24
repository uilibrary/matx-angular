import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginationTableComponent } from './pagination-table.component';

describe('PaginationTableComponent', () => {
  let component: PaginationTableComponent;
  let fixture: ComponentFixture<PaginationTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
