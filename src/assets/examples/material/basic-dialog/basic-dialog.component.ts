import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasicDialogOverviewComponent } from './basic-dialog-overview/basic-dialog-overview.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BasicDialogOverviewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
