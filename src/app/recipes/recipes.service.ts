import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/73/Spaghetti_and_meatballs.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  getAllRecipes(): Recipe[] {
    // doesn't return the original reference array, but a copy of it
    return [...this.recipes];
  }

  getRecipe(recipeId: string | null): Recipe | undefined {
    if (!recipeId) {
      return;
    }

    const result = this.recipes.find((recipe) => recipe.id === recipeId);

    if (!result) {
      return;
    }
    return result;
  }

  deleteRecipe(recipeId: string | undefined): void {
    if (!recipeId) {
      return;
    }

    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
