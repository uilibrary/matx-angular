import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Nested2Component } from './nested2.component';

describe('Nested2Component', () => {
  let component: Nested2Component;
  let fixture: ComponentFixture<Nested2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Nested2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nested2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
