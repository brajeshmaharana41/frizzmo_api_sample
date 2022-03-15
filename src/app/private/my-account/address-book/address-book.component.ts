import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddAddressBookComponent } from '../address-book/add-address-book/add-address-book.component'
@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddAddressBookComponent, {
      height: '650px',
      width: '900px',
    });
  }

  ngOnInit(): void {
  }

}
