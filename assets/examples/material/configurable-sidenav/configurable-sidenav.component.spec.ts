import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableSidenavComponent } from './configurable-sidenav.component';

describe('ConfigurableSidenavComponent', () => {
  let component: ConfigurableSidenavComponent;
  let fixture: ComponentFixture<ConfigurableSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurableSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
