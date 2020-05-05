import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoResizingTexareaComponent } from './auto-resizing-texarea.component';

describe('AutoResizingTexareaComponent', () => {
  let component: AutoResizingTexareaComponent;
  let fixture: ComponentFixture<AutoResizingTexareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoResizingTexareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoResizingTexareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
