import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  internalAttribute: string = "String Interpolation example";
  imageSource: string = "/assets/image.jpg";
  buttonStyle: string = "btn btn-danger";
  searchValueAttribute: string = '';

  getString(){
    return "String interpolation via method call";
  }

  searchValue(eventData: any){
    console.log(<HTMLInputElement>eventData.target.value);
    // Store the value inserted from HTML in the variable.
    this.searchValueAttribute = (<HTMLInputElement>eventData.target).value;
  }
}
