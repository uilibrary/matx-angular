import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBarComponent } from './custom-bar.component';

describe('CustomBarComponent', () => {
  let component: CustomBarComponent;
  let fixture: ComponentFixture<CustomBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
