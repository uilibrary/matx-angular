import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicToolbarComponent } from './basic-toolbar.component';

describe('BasicToolbarComponent', () => {
  let component: BasicToolbarComponent;
  let fixture: ComponentFixture<BasicToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
