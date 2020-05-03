import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSortHeaderComponent } from './basic-sort-header.component';

describe('BasicSortHeaderComponent', () => {
  let component: BasicSortHeaderComponent;
  let fixture: ComponentFixture<BasicSortHeaderComponent>;

  beforeEach(async(() => {
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
