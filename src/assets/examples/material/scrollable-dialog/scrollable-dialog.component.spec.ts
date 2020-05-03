import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableDialogComponent } from './scrollable-dialog.component';

describe('ScrollableDialogComponent', () => {
  let component: ScrollableDialogComponent;
  let fixture: ComponentFixture<ScrollableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
