import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDialogOverviewComponent } from './basic-dialog-overview.component';

describe('BasicDialogOverviewComponent', () => {
  let component: BasicDialogOverviewComponent;
  let fixture: ComponentFixture<BasicDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
