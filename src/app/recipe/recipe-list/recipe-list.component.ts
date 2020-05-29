import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  // create an array of recipe objects which we defined in Recipe.model 
  recipeList: Recipe[] = [
    new Recipe('Kebab', 'Delicious Tandoori kebab', 'https://images.pexels.com/photos/556555/pexels-photo-556555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
