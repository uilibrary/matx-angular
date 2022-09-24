import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicChipComponent } from './basic-chip.component';

describe('BasicChipComponent', () => {
  let component: BasicChipComponent;
  let fixture: ComponentFixture<BasicChipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
