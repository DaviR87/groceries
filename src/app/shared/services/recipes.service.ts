import { Injectable, signal } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipesList = signal<Recipe[]>([]);

  addRecipe(recipe: Recipe) {
    console.log(recipe);
    this.recipesList.update(list => [...list, recipe])
  }

  removeRecipe(recipe: Recipe) {
    this.recipesList.update(list => {
      const index = list.indexOf(recipe);
      if (index > -1) {
         list.splice(index, 1);
      }
      return list
    })
  }

}
