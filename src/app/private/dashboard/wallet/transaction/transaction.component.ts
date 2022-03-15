import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  icons: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {icons: 'arrow_upward', name: 'Order ID - FRI000123', symbol: 20},
  {icons: 'arrow_upward', name: 'Order ID -  FRI000124', symbol: 20},
  {icons: 'arrow_upward', name: 'Order ID -  FRI000125', symbol: 20},
  {icons: 'arrow_upward', name: 'Order ID -  FRI000129', symbol: 20},
  {icons: 'account_balance_wallet', name: 'Added in Wallet (June 2021)', symbol: 100},
];

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  displayedColumns: string[] = ['demo-icons', 'demo-name', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
