import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataTreeComponent } from './dynamic-data-tree.component';

describe('DynamicDataTreeComponent', () => {
  let component: DynamicDataTreeComponent;
  let fixture: ComponentFixture<DynamicDataTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDataTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
