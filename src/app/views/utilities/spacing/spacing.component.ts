import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacingComponent implements OnInit {
  spacings = [0,4,8,12,16,20,24,28,32,36,40,44,48];
  test = '<span class="m-0">test</span>'
  constructor() { }

  ngOnInit() {
  }

}
