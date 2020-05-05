import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-custom-loading-buttons",
  templateUrl: "./custom-loading-buttons.component.html",
  styleUrls: ["./custom-loading-buttons.component.scss"]
})
export class CustomLoadingButtonsComponent implements OnInit {
  defaultLoading: boolean;
  primaryLoading: boolean;
  accentLoading: boolean;
  warnLoading: boolean;
  buttons = [
    {
      name: "default",
      loading: false
    },
    {
      name: "primary",
      loading: false
    },
    {
      name: "accent",
      loading: false
    },
    {
      name: "warn",
      loading: false
    }
  ];

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  showLoading(button) {
    button.loading = true;
    setTimeout(() => {
      button.loading = false;
      this.cdr.detectChanges();
    }, 3000);
  }
}
