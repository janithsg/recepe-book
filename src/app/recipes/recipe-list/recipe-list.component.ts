import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  recipes: Recipe[];                   //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private authService:AuthService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe((res: Recipe[]) => {
      this.recipes = res;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['recipes/new']);  //just 'new' dunnoth link eka hadenne localhost/4200/new kiyala.
  }                                        //  b v need localhost/4200/recipes/new
                                           //best way is = this.router.navigate(['new'],{relatativeTo:this.route});
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}