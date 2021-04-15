import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

// interface Product{
//   "title":'',
//   "imageUrl":'',
//   "description":''
// }
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
isLoading=true;
  products: any=[];
  constructor(private productService:ProductServiceService) { }
  ngOnInit(): void {
    this.isLoading=false;
    this.productService.getProducts().subscribe(res=>
      {
        this.products=res;
        if(res)
        {
          this.isLoading=false;
        }
        console.log("data:" ,this.products);
      })
  }
  del(id) {
    var confirmation= confirm("Confirm Deletion?");

     if(confirmation){
             this.productService.deleteProduct(id);
             setTimeout(
              function(){
              location.reload();
              }, 1000);
     }

    }
  }
