import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent {


  // Bind the form to ts file - method 1
  @ViewChild('product') productForm: NgForm | undefined;
  defaultProductCategory = "category2";
  category = {
    categoryName: '',
    email:'',
    contactNumber:''
  }

  product = {
    productName:'',
    price:'',
    category:''
  }

  constructor(){
      // Nothing here!
  }
  // Bind the form to ts file - method 1
  onSubmit(event : NgForm){
    this.category.categoryName = event.value.categoryGroup.categoryName;
    this.category.email = event.value.categoryGroup.email;
    this.category.contactNumber = event.value.categoryGroup.contactNumber;
    console.log(this.category)
  }

  // Bind the form to ts file - method 2
  onProductFormSubmit(){
    this.product.productName = this.productForm?.value.productGroup.productName;
    this.product.price = this.productForm?.value.productGroup.price;
    this.product.category = this.productForm?.value.category;
    console.log(this.product)
  }
}
