import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIconComponent } from './basic-icon.component';

describe('BasicIconComponent', () => {
  let component: BasicIconComponent;
  let fixture: ComponentFixture<BasicIconComponent>;

  beforeEach(async(() => {
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
