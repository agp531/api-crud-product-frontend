import { Component } from '@angular/core';
import { ProductInterface } from '../../product.interfaces';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrl: './index-product.component.css'
})
export class IndexProductComponent {

  products: ProductInterface[] = [];

  constructor (private productservice: ProductService, private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productservice.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
  }

  deleteProduct(product: ProductInterface) {
    this.productservice.deleteProduct(product.id!).subscribe();
    this.products = this.products.filter(p => p.id !== product.id)
  }

}
