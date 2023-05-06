import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface IngredientForm {
  name: FormControl<string | null>,
  quantity: FormControl<number | null>,
  unit: FormControl<IngredientUnit | null>
}

export type IngredientUnit = 'grams' | 'pieces' | 'units'

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    ingredients: new FormArray<FormGroup<IngredientForm>>([])
  })

  ngOnInit(): void {
    this.addIngredient();
  }

  addIngredient() {
    const ingredientsArray = this.form.controls.ingredients;
    ingredientsArray.push(new FormGroup<IngredientForm>({
      name: new FormControl('', Validators.required),
      quantity: new FormControl(null, Validators.required),
      unit: new FormControl('grams', Validators.required)
    }));
  }

  removeIngredient(index: number) {
    const ingredientsArray = this.form.controls.ingredients;
    ingredientsArray.removeAt(index);
  }

  onSaveRecipe() {
    console.log(this.form.getRawValue())
  }

}
