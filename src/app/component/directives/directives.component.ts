import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit{
  ngOnInit(): void {
    
  }
  products = [
    {id: 1, name: "first"},
    {id: 2, name: "two"},
  ]

}
