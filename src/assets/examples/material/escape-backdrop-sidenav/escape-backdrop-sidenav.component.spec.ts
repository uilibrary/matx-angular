import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EscapeBackdropSidenavComponent } from './escape-backdrop-sidenav.component';

describe('EscapeBackdropSidenavComponent', () => {
  let component: EscapeBackdropSidenavComponent;
  let fixture: ComponentFixture<EscapeBackdropSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapeBackdropSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeBackdropSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
