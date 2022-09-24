import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicBadgeComponent } from './basic-badge.component';

describe('BasicBadgeComponent', () => {
  let component: BasicBadgeComponent;
  let fixture: ComponentFixture<BasicBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
