import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupSelectComponent } from './option-group-select.component';

describe('OptionGroupSelectComponent', () => {
  let component: OptionGroupSelectComponent;
  let fixture: ComponentFixture<OptionGroupSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionGroupSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
