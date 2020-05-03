import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ScrollableDialogOverviewComponent } from './scrollable-dialog-overview/scrollable-dialog-overview.component';

@Component({
  selector: 'app-scrollable-dialog',
  templateUrl: './scrollable-dialog.component.html',
  styleUrls: ['./scrollable-dialog.component.scss']
})
export class ScrollableDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ScrollableDialogOverviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
