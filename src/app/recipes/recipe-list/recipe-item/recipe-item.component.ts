import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index : number;

  //@Output() recipeSelected = new EventEmitter<void>(); 

  ngOnInit() {
   // this.recipe = this.recipeService.getRecipes();
  }

  //onSelected(){
  //  this.recipeSelected.emit(); //emit the click event to recipe-list component
  //}


}






