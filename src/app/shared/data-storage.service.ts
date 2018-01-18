import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";


@Injectable()  //injecting other services to this service
export class DataStorageService {
 
    constructor(private http: Http, private recipeService: RecipeService,private authService : AuthService) {}

    storeRecipes() {
        const token= this.authService.getToken();
        return this.http.put('https://ng-recipe-book-fe78a.firebaseio.com/recipes.json?auth='+ token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token= this.authService.getToken();
        this.http.get('https://ng-recipe-book-fe78a.firebaseio.com/recipes.json?auth='+ token) //?auth= is a query parameter to check the authndication with the token
        .map (                                                                                // http request eka token ekath ekka send karanna one
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ).subscribe(
            (recipes:Recipe[])=>{
                this.recipeService.setRecipe(recipes);     
            }
        );
    }
}