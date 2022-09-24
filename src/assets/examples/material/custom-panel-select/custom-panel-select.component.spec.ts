import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomPanelSelectComponent } from './custom-panel-select.component';

describe('CustomPanelSelectComponent', () => {
  let component: CustomPanelSelectComponent;
  let fixture: ComponentFixture<CustomPanelSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPanelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPanelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
