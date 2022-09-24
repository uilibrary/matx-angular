import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavTabGroupComponent } from './nav-tab-group.component';

describe('NavTabGroupComponent', () => {
  let component: NavTabGroupComponent;
  let fixture: ComponentFixture<NavTabGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
