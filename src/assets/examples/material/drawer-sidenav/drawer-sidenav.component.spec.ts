import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrawerSidenavComponent } from './drawer-sidenav.component';

describe('DrawerSidenavComponent', () => {
  let component: DrawerSidenavComponent;
  let fixture: ComponentFixture<DrawerSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
