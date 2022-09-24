import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorSelectComponent } from './error-select.component';

describe('ErrorSelectComponent', () => {
  let component: ErrorSelectComponent;
  let fixture: ComponentFixture<ErrorSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
