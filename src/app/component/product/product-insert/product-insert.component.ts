import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent {

  
  // Bind the form to ts file - method 1
  @ViewChild('category') categoryForm: NgForm | undefined;
  constructor(){
      // Nothing here!
  }
  onSubmit(event : NgForm){
    console.log(event);
  }

  // Bind the form to ts file - method 2
  onCategroyFormSubmit(){
    console.log(this.categoryForm);
  }
}
