import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EchartBarComponent } from './echart-bar.component';

describe('EchartBarComponent', () => {
  let component: EchartBarComponent;
  let fixture: ComponentFixture<EchartBarComponent>;

  beforeEach(waitForAsync(() => {
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
