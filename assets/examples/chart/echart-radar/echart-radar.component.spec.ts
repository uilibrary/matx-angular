import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartRadarComponent } from './echart-radar.component';

describe('EchartRadarComponent', () => {
  let component: EchartRadarComponent;
  let fixture: ComponentFixture<EchartRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
