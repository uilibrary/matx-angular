import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortingComponent } from './table-sorting.component';

describe('TableSortingComponent', () => {
  let component: TableSortingComponent;
  let fixture: ComponentFixture<TableSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
