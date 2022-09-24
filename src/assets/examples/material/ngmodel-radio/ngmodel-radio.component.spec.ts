import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgmodelRadioComponent } from './ngmodel-radio.component';

describe('NgmodelRadioComponent', () => {
  let component: NgmodelRadioComponent;
  let fixture: ComponentFixture<NgmodelRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
