import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  constructor(private productService:ProductServiceService,private route:ActivatedRoute) { }
  products:any=null;
  isLoading;
  ngOnInit(): void {
    this.isLoading=true;
    this.route.params.subscribe(params =>
      {
        this.productService.getProductDetails(params.id).subscribe(res=>
          {
            this.products=res;
            console.log("product data:",this.products)
          },
    err =>{console.log (err)},
    ()=> { this.isLoading  = false;});
        });

  }
}

