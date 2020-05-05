import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabGroupComponent } from './dynamic-tab-group.component';

describe('DynamicTabGroupComponent', () => {
  let component: DynamicTabGroupComponent;
  let fixture: ComponentFixture<DynamicTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
