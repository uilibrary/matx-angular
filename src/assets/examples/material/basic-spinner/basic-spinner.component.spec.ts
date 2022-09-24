import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicSpinnerComponent } from './basic-spinner.component';

describe('BasicSpinnerComponent', () => {
  let component: BasicSpinnerComponent;
  let fixture: ComponentFixture<BasicSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
