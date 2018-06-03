import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
