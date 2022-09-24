import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigurableCheckboxComponent } from './configurable-checkbox.component';

describe('ConfigurableCheckboxComponent', () => {
  let component: ConfigurableCheckboxComponent;
  let fixture: ComponentFixture<ConfigurableCheckboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurableCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
