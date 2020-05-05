import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPaginatorComponent } from './basic-paginator.component';

describe('BasicPaginatorComponent', () => {
  let component: BasicPaginatorComponent;
  let fixture: ComponentFixture<BasicPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
