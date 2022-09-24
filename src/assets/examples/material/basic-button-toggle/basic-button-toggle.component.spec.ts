import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicButtonToggleComponent } from './basic-button-toggle.component';

describe('BasicButtonToggleComponent', () => {
  let component: BasicButtonToggleComponent;
  let fixture: ComponentFixture<BasicButtonToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
