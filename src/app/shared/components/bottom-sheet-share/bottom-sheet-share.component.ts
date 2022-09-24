import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-share',
  templateUrl: './bottom-sheet-share.component.html',
  styleUrls: ['./bottom-sheet-share.component.scss'],
})
export class BottomSheetShareComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetShareComponent>) {}

  ngOnInit() {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
  }
}
