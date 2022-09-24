import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
const moment = _moment;

@Component({
  selector: 'app-moment-js-datepicker',
  templateUrl: './moment-js-datepicker.component.html',
  styleUrls: ['./moment-js-datepicker.component.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class MomentJsDatepickerComponent implements OnInit {

    // Datepicker takes `Moment` objects instead of `Date` objects.
    date = new UntypedFormControl(moment([2017, 0, 1]));

  constructor() { }

  ngOnInit() {
  }

}
