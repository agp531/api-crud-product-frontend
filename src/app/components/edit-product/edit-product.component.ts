import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductInterface } from '../../product.interfaces';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnChanges {

  private file!: string | File | null;
  @Input() product!: ProductInterface

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    photo: this.file,
    description: ['', [Validators.maxLength(5000)]],
    price: [0, [Validators.required ,Validators.min(1)]],
    stock: [0, [Validators.required]],
  });

  error = '';
  constructor(private productservice: ProductService, private formBuilder: FormBuilder,private router: Router ){
    
  }

  ngOnChanges(): void {
    this.form.patchValue({
      name: this.product.name,
      photo: this.product.photo,
      description: this.product.description,
      price: Number(this.product.price),
      stock: this.product.stock
    })
  }

  onImagePicked(event: any) {
    const file: File = event.target.files[0];
    this.file = file;
  }

  update() {
    if(!this.form.valid){
       this.error = "Error an update a product";
      return
    }
    
    const product: ProductInterface = {
      name: String(this.form.controls.name.value),
      photo: this.form.controls.photo.value,
      description: String(this.form.controls.description.value),
      price: Number(this.form.controls.price.value),
      stock: Number(this.form.controls.stock.value)
    };
    
    this.productservice.update(product.id!, product).subscribe({
      next: (res: any) => {
        if(this.file instanceof File) {
          this.productservice.uploadFile(res.id, this.file).subscribe()
        }
      }
    })
  }
}
