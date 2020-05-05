import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSidenavComponent } from './drawer-sidenav.component';

describe('DrawerSidenavComponent', () => {
  let component: DrawerSidenavComponent;
  let fixture: ComponentFixture<DrawerSidenavComponent>;

  beforeEach(async(() => {
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
