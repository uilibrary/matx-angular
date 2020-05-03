import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordinExpansionPanelComponent } from './accordin-expansion-panel.component';

describe('AccordinExpansionPanelComponent', () => {
  let component: AccordinExpansionPanelComponent;
  let fixture: ComponentFixture<AccordinExpansionPanelComponent>;

  beforeEach(async(() => {
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
