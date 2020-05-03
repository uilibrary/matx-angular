import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordin-expansion-panel',
  templateUrl: './accordin-expansion-panel.component.html',
  styleUrls: ['./accordin-expansion-panel.component.scss']
})
export class AccordinExpansionPanelComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
