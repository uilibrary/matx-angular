import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Nested3Component } from './nested3.component';

describe('Nested3Component', () => {
  let component: Nested3Component;
  let fixture: ComponentFixture<Nested3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Nested3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nested3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
