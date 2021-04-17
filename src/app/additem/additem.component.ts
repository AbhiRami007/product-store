import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  [x: string]: any;


  addItemData:FormGroup;
  data={};
  constructor(private formbuilder:FormBuilder, private productService:ProductServiceService, private router:Router) { }
isloading;
  ngOnInit(): void {
    this.addItemData=this.formbuilder.group({
      imageUrl:["", Validators.required],
      title:["", Validators.required],
      description:["", Validators.required],
    });
  }
  addItem(){

    this.isloading=true;
    if(this.addItemData.valid){
    var body={
      "imageUrl":this.addItemData.value.imageUrl,
      "title":this.addItemData.value.title,
      "description":this.addItemData.value.description
    };
        this.productService.addProduct(this.addItemData.value).subscribe(res=>
          {
            console.log("items",res);
          },
          err =>{console.log (err)},
        ()=> { this.isLoading  = false;});
        if(this.router.navigate(['/'])){
          setTimeout(
            function(){
            location.reload();
            }, 1000);
        }

  }


}


}
