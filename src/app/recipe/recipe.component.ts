import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass']
})
export class RecipeComponent implements OnInit {
  viewSelected: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  saveSelectedRecipe(recipe) {
    this.viewSelected = recipe;
    
  }

}
