import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuffixPrefixInputComponent } from './suffix-prefix-input.component';

describe('SuffixPrefixInputComponent', () => {
  let component: SuffixPrefixInputComponent;
  let fixture: ComponentFixture<SuffixPrefixInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuffixPrefixInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixPrefixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
