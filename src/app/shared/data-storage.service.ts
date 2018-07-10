import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    //    const headers = new HttpHeaders().set('Authorization', 'Bearer dhsaikdsa');

    // return this.httpClient.put(
    //   'https://ng-recipe-book-bb0b3.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'events',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   }
    // );
    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-bb0b3.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      .get<Recipe[]>('https://ng-recipe-book-bb0b3.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        map(recipes => {
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
