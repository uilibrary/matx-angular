import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { CustomSnackbarOverviewComponent } from './custom-snackbar-overview/custom-snackbar-overview.component';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(CustomSnackbarOverviewComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit() {
  }

}
