import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-sidenav',
  templateUrl: './responsive-sidenav.component.html',
  styleUrls: ['./responsive-sidenav.component.scss']
})
export class ResponsiveSidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 5}, () => `my content`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
