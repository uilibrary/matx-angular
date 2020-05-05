import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSelectComponent } from './reset-select.component';

describe('ResetSelectComponent', () => {
  let component: ResetSelectComponent;
  let fixture: ComponentFixture<ResetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
