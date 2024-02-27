import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductInterface } from '../../../product.interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  private file!: File;

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    photo: this.file,
    description: ['', [Validators.maxLength(5000)]],
    price: [0, [Validators.required ,Validators.min(1)]],
    stock: [0, [Validators.required]],
  });

  error = '';
  constructor(private productservice: ProductService, private formBuilder: FormBuilder, private router: Router){

  }

  onImagePicked(event: any) {

    const file: File = event.target.files[0];
    const fsize = Math.round((file.size / 1024));
    if (fsize > 3072) {
      alert(
        "File too Big, please select a file less than 3mb");
      return;
    } 
    this.file = file;
  }

  create() {
    if(!this.form.valid){
       this.error = "Error an create a new product";
      return
    }
    
    const product: ProductInterface = {
      name: String(this.form.controls.name.value),
      photo: this.form.controls.photo.value,
      description: String(this.form.controls.description.value),
      price: Number(this.form.controls.price.value),
      stock: Number(this.form.controls.stock.value),
    };

    this.productservice.create(product).subscribe({
      next: (res: any) => {
        this.productservice.uploadFile(res.id, this.file).subscribe()
      }
    })

    this.router.navigate([''], { queryParams: { reload: true } });
  }

}
