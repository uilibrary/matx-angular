import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClearButtonInputComponent } from './clear-button-input.component';

describe('ClearButtonInputComponent', () => {
  let component: ClearButtonInputComponent;
  let fixture: ComponentFixture<ClearButtonInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearButtonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
