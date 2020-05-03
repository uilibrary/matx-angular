import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseSidenavComponent } from './open-close-sidenav.component';

describe('OpenCloseSidenavComponent', () => {
  let component: OpenCloseSidenavComponent;
  let fixture: ComponentFixture<OpenCloseSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCloseSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
