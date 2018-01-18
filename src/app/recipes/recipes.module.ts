import {NgModule} from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownDirective } from '../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { ResipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent
        
    ],

    imports:[
        ReactiveFormsModule, 
        CommonModule,  //includes ngif ngfor etc.. features 
        ResipesRoutingModule,  //adding  recipe routes
        SharedModule  // importing dropdown directive
    ]
})

export class RecipesModule{}