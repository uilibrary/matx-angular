import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSelectComponent } from './feature-select.component';

describe('FeatureSelectComponent', () => {
  let component: FeatureSelectComponent;
  let fixture: ComponentFixture<FeatureSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
