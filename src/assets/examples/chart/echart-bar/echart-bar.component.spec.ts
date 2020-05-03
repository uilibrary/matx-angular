import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartBarComponent } from './echart-bar.component';

describe('EchartBarComponent', () => {
  let component: EchartBarComponent;
  let fixture: ComponentFixture<EchartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
