import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-sticky-footer-table',
  templateUrl: './sticky-footer-table.component.html',
  styleUrls: ['./sticky-footer-table.component.scss']
})
export class StickyFooterTableComponent implements OnInit {

  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
