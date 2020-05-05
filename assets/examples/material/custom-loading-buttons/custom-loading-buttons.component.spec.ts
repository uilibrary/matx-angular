import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoadingButtonsComponent } from './custom-loading-buttons.component';

describe('CustomLoadingButtonsComponent', () => {
  let component: CustomLoadingButtonsComponent;
  let fixture: ComponentFixture<CustomLoadingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLoadingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLoadingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
