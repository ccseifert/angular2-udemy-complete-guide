import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test.',
      'https://static-communitytable.parade.com/wp-content/uploads/2018/01/instantpot-cheeseburger-mac-1.jpg',
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test. 2',
      'https://static-communitytable.parade.com/wp-content/uploads/2018/01/instantpot-cheeseburger-mac-1.jpg',
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit() {}
}
