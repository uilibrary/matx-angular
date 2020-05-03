import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGridComponent } from './basic-grid.component';

describe('BasicGridComponent', () => {
  let component: BasicGridComponent;
  let fixture: ComponentFixture<BasicGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
