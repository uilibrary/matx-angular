import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabGroupComponent } from './basic-tab-group.component';

describe('BasicTabGroupComponent', () => {
  let component: BasicTabGroupComponent;
  let fixture: ComponentFixture<BasicTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
