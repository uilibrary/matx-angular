import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-class-tooltip',
  templateUrl: './custom-class-tooltip.component.html',
  styleUrls: ['./custom-class-tooltip.component.scss'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None
})
export class CustomClassTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
