import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChipComponent } from './basic-chip.component';

describe('BasicChipComponent', () => {
  let component: BasicChipComponent;
  let fixture: ComponentFixture<BasicChipComponent>;

  beforeEach(async(() => {
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
