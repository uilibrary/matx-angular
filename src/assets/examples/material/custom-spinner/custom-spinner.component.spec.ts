import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpinnerComponent } from './custom-spinner.component';

describe('CustomSpinnerComponent', () => {
  let component: CustomSpinnerComponent;
  let fixture: ComponentFixture<CustomSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
