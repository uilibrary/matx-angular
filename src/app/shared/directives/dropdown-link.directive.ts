import { Directive, HostBinding, Inject, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { AppDropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[appDropdownLink]',
})
export class DropdownLinkDirective implements OnInit, OnDestroy {
  @Input() public group: any;

  protected _open: boolean;
  protected nav: AppDropdownDirective;

  @HostBinding('class.open')
  @Input()
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    // if (value) {
    //   this.nav.closeOtherLinks(this);
    // }
  }

  public constructor(
    @Inject(AppDropdownDirective) nav: AppDropdownDirective, 
    private _elemRef: ElementRef
  ) {
    this.nav = nav;
  }

  public ngOnInit(): any {
    this.nav.addLink(this);

    // set true if open class exists
    setTimeout(() => {
      this.open = this._elemRef.nativeElement.classList.contains('open');
    }, 100);
  }

  public ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  public toggle(): any {
    this.open = !this.open;
  }
}
