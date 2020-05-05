import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeterminateBarComponent } from './indeterminate-bar.component';

describe('IndeterminateBarComponent', () => {
  let component: IndeterminateBarComponent;
  let fixture: ComponentFixture<IndeterminateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeterminateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeterminateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
