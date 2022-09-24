import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicToggleComponent } from './basic-toggle.component';

describe('BasicToggleComponent', () => {
  let component: BasicToggleComponent;
  let fixture: ComponentFixture<BasicToggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
