import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidenavComponent } from './fixed-sidenav.component';

describe('FixedSidenavComponent', () => {
  let component: FixedSidenavComponent;
  let fixture: ComponentFixture<FixedSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
