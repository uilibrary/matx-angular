import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicIconComponent } from './basic-icon.component';

describe('BasicIconComponent', () => {
  let component: BasicIconComponent;
  let fixture: ComponentFixture<BasicIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
