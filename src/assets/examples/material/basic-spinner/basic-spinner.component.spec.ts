import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSpinnerComponent } from './basic-spinner.component';

describe('BasicSpinnerComponent', () => {
  let component: BasicSpinnerComponent;
  let fixture: ComponentFixture<BasicSpinnerComponent>;

  beforeEach(async(() => {
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
