import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EchartRadarComponent } from './echart-radar.component';

describe('EchartRadarComponent', () => {
  let component: EchartRadarComponent;
  let fixture: ComponentFixture<EchartRadarComponent>;

  beforeEach(waitForAsync(() => {
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
