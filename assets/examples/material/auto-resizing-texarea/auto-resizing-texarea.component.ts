import { Component, OnInit } from "@angular/core";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { NgZone, ViewChild } from "@angular/core";
import { take } from "rxjs/operators";

@Component({
  selector: "app-auto-resizing-texarea",
  templateUrl: "./auto-resizing-texarea.component.html",
  styleUrls: ["./auto-resizing-texarea.component.scss"]
})
export class AutoResizingTexareaComponent implements OnInit {
  constructor(private ngZone: NgZone) {}

  @ViewChild("autosize") autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {}
}
