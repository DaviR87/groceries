import { Component, OnInit } from '@angular/core';
import * as recipesList from '../../../mock/recipes.json'
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from 'src/app/interfaces/recipe.interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(
    public recipesService: RecipesService
  ) {

  }
  ngOnInit(): void {
  }

}
