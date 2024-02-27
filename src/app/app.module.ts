import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexProductComponent } from './components/index-product/index-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { CreateComponent } from './components/index-product/create/create.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexProductComponent,
    ShowProductComponent,
    CreateComponent,
    EditProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
