import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from './product.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1/api/products"

  create(product: ProductInterface) {
    return this.http.post(this.url, product);
  }

}
