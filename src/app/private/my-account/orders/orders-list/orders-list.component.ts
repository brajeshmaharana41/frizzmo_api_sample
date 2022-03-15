import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  columns = [
    {
      columnDef: 'position',
      header: 'Items',
      cell: (element: PeriodicElement) => `${element.position}`
    },
    {
      columnDef: 'name',
      header: 'Price',
      cell: (element: PeriodicElement) => `${element.name}`
    },
    {
      columnDef: 'weight',
      header: 'Quantity',
      cell: (element: PeriodicElement) => `${element.weight}`
    },
    {
      columnDef: 'symbol',
      header: 'Total',
      cell: (element: PeriodicElement) => `${element.symbol}`
    }
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
