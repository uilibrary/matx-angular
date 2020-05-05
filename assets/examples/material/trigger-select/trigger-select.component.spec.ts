import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerSelectComponent } from './trigger-select.component';

describe('TriggerSelectComponent', () => {
  let component: TriggerSelectComponent;
  let fixture: ComponentFixture<TriggerSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
