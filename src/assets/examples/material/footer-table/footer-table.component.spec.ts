import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTableComponent } from './footer-table.component';

describe('FooterTableComponent', () => {
  let component: FooterTableComponent;
  let fixture: ComponentFixture<FooterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
