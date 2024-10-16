import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes = [
    { id: 1, name: 'Spaghetti', cuisine: 'Italian', description: 'A delicious Italian pasta dish.' },
    { id: 2, name: 'Tacos', cuisine: 'Mexican', description: 'A flavorful Mexican street food.' },
    { id: 3, name: 'Butter Chicken', cuisine: 'Indian', description: 'A rich Indian curry.' }
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: { name: string; cuisine: string; description: string }) {
    const newId = this.recipes.length ? Math.max(...this.recipes.map(r => r.id)) + 1 : 1;
    const newRecipe = { id: newId, ...recipe };
    this.recipes.push(newRecipe);
  }

  getRecipeById(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
