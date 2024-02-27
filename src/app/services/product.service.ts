import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../product.interfaces';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private urlGetFile = "http://127.0.0.1/api"
  private apiUrl = "http://127.0.0.1/api/products"
  private apiUploadFile = "http://127.0.0.1/api/uploadFile"

  create(product: ProductInterface) {
    return this.http.post(this.apiUrl, product);
  }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.apiUrl}/${id}`);
  }

  update(id:string, product: ProductInterface): Observable<ProductInterface> {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<ProductInterface>(url, product);
  }

  uploadFile(id: string, file: File) {
    const formData = new FormData();
    formData.append('photo', file)
    return this.http.post(`${this.apiUploadFile}/${id}`, formData);
  }

  getProductImagePath(product: string): Observable<string> {
    const url = `${this.urlGetFile}/${product}/image`;
    return this.http.get<string>(url);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  

}
