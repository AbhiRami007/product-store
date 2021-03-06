import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdditemComponent} from './additem/additem.component'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl="https://sheltered-springs-67444.herokuapp.com/";
  status: string;
  err:string;
    constructor(private httpClient: HttpClient) { }
    getProducts()
    {
      return this.httpClient.get(this.baseUrl+'product');
    }

    getProductDetails(id)
    {
      return this.httpClient.get(this.baseUrl+'product/'+id);
    }

    addProduct(item)
    {
      return this.httpClient.post(this.baseUrl+'product/',item)
    }

    deleteProduct(id){
      return this.httpClient.delete(this.baseUrl+ 'product/'+id)

    }
}
