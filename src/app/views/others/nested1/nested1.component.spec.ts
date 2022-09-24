import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Nested1Component } from './nested1.component';

describe('Nested1Component', () => {
  let component: Nested1Component;
  let fixture: ComponentFixture<Nested1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Nested1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nested1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
