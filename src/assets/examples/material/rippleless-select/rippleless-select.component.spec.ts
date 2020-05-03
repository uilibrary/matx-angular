import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplelessSelectComponent } from './rippleless-select.component';

describe('RipplelessSelectComponent', () => {
  let component: RipplelessSelectComponent;
  let fixture: ComponentFixture<RipplelessSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RipplelessSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RipplelessSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
