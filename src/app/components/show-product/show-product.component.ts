import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../product.interfaces';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent {

  productId!: string;
  imagePath!: string;

  product?: ProductInterface;
  constructor (private productservice: ProductService, private route:ActivatedRoute) {
    this.getProduct()
  }

  ngOnInit(): void {
    this.getProductImagePath();
  }

  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    this.productservice.getProductById(id ?? '').subscribe((product) => (this.product = product));
  }

  getProductImagePath() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.productservice.getProductImagePath(id ?? '').subscribe((path) =>  (this.imagePath = path));
  }

}
