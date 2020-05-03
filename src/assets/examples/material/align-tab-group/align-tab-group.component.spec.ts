import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignTabGroupComponent } from './align-tab-group.component';

describe('AlignTabGroupComponent', () => {
  let component: AlignTabGroupComponent;
  let fixture: ComponentFixture<AlignTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
