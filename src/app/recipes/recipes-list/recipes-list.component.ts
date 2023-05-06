import { Component } from '@angular/core';
import * as recipesList from '../../../mock/recipes.json'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipesList = recipesList;

}
