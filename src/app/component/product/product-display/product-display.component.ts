import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnChanges {
 constructor(private http: HttpClient){
   this.tableRefreshMethod("");
 }
 @Input() itemId = '';
  listOfProducts = [];
 tableRefreshMethod(itemId: string){
   if(itemId != ""){
     this.http.get(
       "http://localhost:8080/api/v2/prod/specific/get/" + encodeURIComponent(itemId),
     ).pipe(map(this.extractData)).subscribe(response => {
       this.listOfProducts = response;
       console.log(this.listOfProducts); //Debug
     })
   } console.log("No Id selected!")
 }

 extractData(res: any){
   let body = res;  // If response is a JSON use json()
   if (body) {
     return body.listOfProducts || body;
   } else {
     return {};
   }
 }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableRefreshMethod(this.itemId);
    console.log(this.itemId);
  }
}
