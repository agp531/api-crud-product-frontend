import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexProductComponent } from './components/index-product/index-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { CreateComponent } from './components/index-product/create/create.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',component: IndexProductComponent},
  {path:'create', component: CreateComponent},
  {path:'product/:id', component: ShowProductComponent},
  {path:'product/edit/:id', component: EditProductComponent},
  {path:'product/:id', component: IndexProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
