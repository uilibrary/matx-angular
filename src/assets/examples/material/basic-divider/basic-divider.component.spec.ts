import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicDividerComponent } from './basic-divider.component';

describe('BasicDividerComponent', () => {
  let component: BasicDividerComponent;
  let fixture: ComponentFixture<BasicDividerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
