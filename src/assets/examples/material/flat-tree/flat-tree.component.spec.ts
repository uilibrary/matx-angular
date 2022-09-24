import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlatTreeComponent } from './flat-tree.component';

describe('FlatTreeComponent', () => {
  let component: FlatTreeComponent;
  let fixture: ComponentFixture<FlatTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
