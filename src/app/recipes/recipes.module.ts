import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { RecipeItemsComponent } from './recipe-items/recipe-items.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipesPageRoutingModule],
  declarations: [RecipesPage, RecipeItemsComponent],
})
export class RecipesPageModule {}
