import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightCuisineDirective } from '../../directives/highlight-cuisine.directive';
import { RecipeService } from '../../services/recipe.service';  // Import the service

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightCuisineDirective],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: { id: number; name: string; cuisine: string; description: string; }[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // Fetch the recipes from the service when the component initializes
    this.recipes = this.recipeService.getRecipes();
  }
}
