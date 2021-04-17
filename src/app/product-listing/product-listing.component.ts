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
loading;
i;
  products: any=[];
  constructor(private productService:ProductServiceService) { }
  ngOnInit(): void {
    this.isLoading=true;
    this.productService.getProducts().subscribe(res=>
      {
        this.products=res;
        if(res)
        {
          this.isLoading=false;
        }

        console.log("data:" ,this.products);
      },
      err =>{console.log (err)},
    ()=> { this.isLoading  = false; this.loading=false;})

  }
  del(pid) {

    var confirmation= confirm("Confirm Deletion?");
    if(!confirmation)
    {
      this.loading=false;
    }
     if(confirmation){
      this.loading=true;

    this.productService.deleteProduct(pid).subscribe(res=>
      {
        this.loading=false;
      },
      err =>{console.log (err)},
    ()=> { this.loading=true;})

             setTimeout(
              function(){
              location.reload();
              }, 1000);
     }

    }
  }
