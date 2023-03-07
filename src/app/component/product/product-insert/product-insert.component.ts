import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent {


  // Bind the form to ts file - method 1
  @ViewChild('product') productForm: NgForm | undefined;
  defaultProductCategory = "1";
  listOfProducts = [];
  category = {
    productCategoryName: '',
    email:'',
    contactNumber:''
  }

  product = {
    productName:'',
    price:'',
    productCategory: {
      id: ""
    }
  }

  constructor(private http: HttpClient){
    this.fetchAllCategories();
  }
  // Bind the form to ts file - method 1
  onSubmit(event : NgForm){
    this.category.productCategoryName = event.value.categoryGroup.categoryName;
    this.category.email = event.value.categoryGroup.email;
    this.category.contactNumber = event.value.categoryGroup.contactNumber;
    console.log(this.category)
    event.reset();

    // In angular request is only when we are subscribed!
    this.http.post(
      'http://localhost:8080/api/v2/prod/prod-category',
      this.category,
      ).subscribe( response => {
        console.log(response);
    })
  }

  // Bind the form to ts file - method 2
  onProductFormSubmit(){
    this.product.productName = this.productForm?.value.productGroup.productName;
    this.product.price = this.productForm?.value.productGroup.price;
    this.product.productCategory.id = this.productForm?.value.category;
    console.log(this.product)

    this.http.post(
      "http://localhost:8080/api/v2/prod/prod",
      this.product,
    ).subscribe( response => {
      console.log(response)
    })

    this.productForm?.reset();
  }

  fetchAllCategories(){
    this.http.get(
      "http://localhost:8080/api/v2/prod/prod-category",
      ).pipe(map(this.extractData)).subscribe(response => {
        this.listOfProducts = response;
        console.log(this.listOfProducts);
    })
  }

  private extractData(res: any) {
    let body = res;  // If response is a JSON use json()
    if (body) {
      return body.listOfProductCategories || body;
    } else {
      return {};
    }
  }
}
