import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.sass']
})
export class ShoppingComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('apples', 6),
    new Ingredient('tomato', 20)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
