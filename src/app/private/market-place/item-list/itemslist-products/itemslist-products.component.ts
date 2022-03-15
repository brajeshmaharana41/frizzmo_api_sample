import { Component, OnInit } from '@angular/core';
import { ListProductData } from '../../../../services/provider/provider';
import { ProductService } from '../.../../../../../services/product.service';

@Component({
  selector: 'app-itemslist-products',
  templateUrl: './itemslist-products.component.html',
  styleUrls: ['./itemslist-products.component.scss']
})
export class ItemslistProductsComponent implements OnInit {
  public listDatas =<ListProductData[]>{};

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.service.list()
      .subscribe(response => this.listDatas = response); 
  }

}
