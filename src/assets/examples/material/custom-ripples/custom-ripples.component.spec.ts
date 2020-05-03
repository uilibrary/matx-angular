import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRipplesComponent } from './custom-ripples.component';

describe('CustomRipplesComponent', () => {
  let component: CustomRipplesComponent;
  let fixture: ComponentFixture<CustomRipplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRipplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRipplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
