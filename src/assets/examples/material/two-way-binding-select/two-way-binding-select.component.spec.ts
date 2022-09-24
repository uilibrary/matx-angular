import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwoWayBindingSelectComponent } from './two-way-binding-select.component';

describe('TwoWayBindingSelectComponent', () => {
  let component: TwoWayBindingSelectComponent;
  let fixture: ComponentFixture<TwoWayBindingSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindingSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
