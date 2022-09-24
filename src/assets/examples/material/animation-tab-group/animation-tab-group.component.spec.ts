import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimationTabGroupComponent } from './animation-tab-group.component';

describe('AnimationTabGroupComponent', () => {
  let component: AnimationTabGroupComponent;
  let fixture: ComponentFixture<AnimationTabGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
