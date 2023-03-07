import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  constructor(private http: HttpClient) {
    this.fetchAllCategories();
  }

  listOfProducts = [];
  defaultProductCategory = "1"
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
