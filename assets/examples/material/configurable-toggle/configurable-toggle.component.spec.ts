import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableToggleComponent } from './configurable-toggle.component';

describe('ConfigurableToggleComponent', () => {
  let component: ConfigurableToggleComponent;
  let fixture: ComponentFixture<ConfigurableToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurableToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
