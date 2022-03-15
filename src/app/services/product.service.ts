import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListProductData } from '../services/provider/provider';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = 'https://fakestoreapi.com/products'
  constructor( private http : HttpClient) { }

  list() : Observable<ListProductData[]>{
    return this.http.get<ListProductData[]>(this._url)
  }
}
