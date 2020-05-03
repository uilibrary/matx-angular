import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatKitsComponent } from './mat-kits.component';

describe('MatKitsComponent', () => {
  let component: MatKitsComponent;
  let fixture: ComponentFixture<MatKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
