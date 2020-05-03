import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExamplesComponent } from './button-examples.component';

describe('ButtonExamplesComponent', () => {
  let component: ButtonExamplesComponent;
  let fixture: ComponentFixture<ButtonExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
