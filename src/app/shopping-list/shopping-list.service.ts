import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {
    ingredientChanged = new Subject<Ingredient[]>();  //like eventemitter
    startedEditing =  new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('orange', 56)
    ];

    getIngredients() {
        return this.ingredients;
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice()); // emit == next
    }

    updateIngredient(id:number,ingredientOb:Ingredient){
        this.ingredients[id] = ingredientOb;
        this.ingredientChanged.next(this.ingredients);  //emmitng to others

    }

    deleteIngredient(id:number){
       this.ingredients.splice(id,1);
       this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredientObj : Ingredient[]){
        this.ingredients.push(...ingredientObj);
        this.ingredientChanged.next(this.ingredients.slice());
    }

}