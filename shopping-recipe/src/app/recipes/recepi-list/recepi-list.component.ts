import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recepi-list',
  templateUrl: './recepi-list.component.html',
  styleUrls: ['./recepi-list.component.css']
})
export class RecepiListComponent implements OnInit{
  recipes:Recipe []=[
    new Recipe("A test recipe","This is simply a test","https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg")
  ];
 constructor(){}
  ngOnInit(): void {

  }

}
