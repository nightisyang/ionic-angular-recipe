import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.scss'],
})
export class RecipeItemsComponent implements OnInit {
  constructor() {}

  @Input() recipeItem!: Recipe;

  ngOnInit() {}
}
