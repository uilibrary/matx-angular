import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSidenavComponent } from './basic-sidenav.component';

describe('BasicSidenavComponent', () => {
  let component: BasicSidenavComponent;
  let fixture: ComponentFixture<BasicSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
