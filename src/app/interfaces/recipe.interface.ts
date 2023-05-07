import { FormControl } from "@angular/forms"

export interface IngredientForm {
  name: FormControl<string | null>,
  quantity: FormControl<number | null>,
  unit: FormControl<IngredientUnit | null>
}

export type IngredientUnit = 'grams' | 'pieces' | 'units'

export interface Recipe {
  name: string | null;
  ingredients: Ingredients[];
}

export interface Ingredients {
  name: string | null,
  quantity: number | null,
  unit: IngredientUnit | null
}
