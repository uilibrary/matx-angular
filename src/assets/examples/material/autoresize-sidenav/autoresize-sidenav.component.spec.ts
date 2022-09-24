import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutoresizeSidenavComponent } from './autoresize-sidenav.component';

describe('AutoresizeSidenavComponent', () => {
  let component: AutoresizeSidenavComponent;
  let fixture: ComponentFixture<AutoresizeSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresizeSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresizeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
