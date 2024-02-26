import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product.interfaces';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  constructor(private service: ProductService) {

  }

  create() {

    const product = {
      "name": "Allan",
      "description": "459999-9999",
      "stock": 1,
      "price": 25.00,
      "photo": null
    }

    this.service.create(product).subscribe()
  }


}
