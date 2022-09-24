import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicListComponent } from './basic-list.component';

describe('BasicListComponent', () => {
  let component: BasicListComponent;
  let fixture: ComponentFixture<BasicListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
