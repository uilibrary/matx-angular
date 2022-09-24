import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicSortHeaderComponent } from './basic-sort-header.component';

describe('BasicSortHeaderComponent', () => {
  let component: BasicSortHeaderComponent;
  let fixture: ComponentFixture<BasicSortHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSortHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
