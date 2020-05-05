import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeBackdropSidenavComponent } from './escape-backdrop-sidenav.component';

describe('EscapeBackdropSidenavComponent', () => {
  let component: EscapeBackdropSidenavComponent;
  let fixture: ComponentFixture<EscapeBackdropSidenavComponent>;

  beforeEach(async(() => {
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
