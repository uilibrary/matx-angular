import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicTabGroupComponent } from './basic-tab-group.component';

describe('BasicTabGroupComponent', () => {
  let component: BasicTabGroupComponent;
  let fixture: ComponentFixture<BasicTabGroupComponent>;

  beforeEach(waitForAsync(() => {
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
