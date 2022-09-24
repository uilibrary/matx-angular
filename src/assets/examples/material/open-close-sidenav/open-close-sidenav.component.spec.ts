import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenCloseSidenavComponent } from './open-close-sidenav.component';

describe('OpenCloseSidenavComponent', () => {
  let component: OpenCloseSidenavComponent;
  let fixture: ComponentFixture<OpenCloseSidenavComponent>;

  beforeEach(waitForAsync(() => {
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
