import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGridComponent } from './dynamic-grid.component';

describe('DynamicGridComponent', () => {
  let component: DynamicGridComponent;
  let fixture: ComponentFixture<DynamicGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
