import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordinExpansionPanelComponent } from './accordin-expansion-panel.component';

describe('AccordinExpansionPanelComponent', () => {
  let component: AccordinExpansionPanelComponent;
  let fixture: ComponentFixture<AccordinExpansionPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordinExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordinExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
