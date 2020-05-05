import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixPrefixInputComponent } from './suffix-prefix-input.component';

describe('SuffixPrefixInputComponent', () => {
  let component: SuffixPrefixInputComponent;
  let fixture: ComponentFixture<SuffixPrefixInputComponent>;

  beforeEach(async(() => {
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
