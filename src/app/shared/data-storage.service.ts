import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(
      'https://ng-recipe-book-bb0b3.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http
      .get('https://ng-recipe-book-bb0b3.firebaseio.com/recipes.json?auth=' + token)
      .pipe(
        map(response => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
