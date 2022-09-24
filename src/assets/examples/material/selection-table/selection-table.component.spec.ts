import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectionTableComponent } from './selection-table.component';

describe('SelectionTableComponent', () => {
  let component: SelectionTableComponent;
  let fixture: ComponentFixture<SelectionTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
