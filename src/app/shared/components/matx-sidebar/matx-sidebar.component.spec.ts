import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatxSidebarComponent } from './matx-sidebar.component';

describe('MatxSidebarComponent', () => {
  let component: MatxSidebarComponent;
  let fixture: ComponentFixture<MatxSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatxSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatxSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
