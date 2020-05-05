import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartPieComponent } from './echart-pie.component';

describe('EchartPieComponent', () => {
  let component: EchartPieComponent;
  let fixture: ComponentFixture<EchartPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
