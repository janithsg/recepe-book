import { Subject } from "rxjs/Subject";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [                    // creating the recipe object array
    new Recipe('Texan grilled chicken with cowboy beans', 'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.', 'assets/img/recipes/rec1.jpg', [new Ingredient('tablespoons soy sauce', 2), new Ingredient('pound salmon', 1), new Ingredient('clove garlic, minced', 1)]), 
    new Recipe('Creamy Potato Salad With Bacon', 'To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese.', 'assets/img/recipes/rec4.jpg', [new Ingredient('Meat', 1), new Ingredient('fish', 5)])
    , new Recipe('Artichoke Spinach Lasagna', 'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving. ', 'assets/img/recipes/rec2.jpg', [new Ingredient('cup chopped fresh cilantro', 1/4 ), new Ingredient('bay leaves', 3)]), 
    new Recipe('Grilled Chicken with Rosemary and Bacon', 'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.', 'assets/img/recipes/rec5.jpg', [new Ingredient('Meat', 1), new Ingredient('fish', 1)])
    , new Recipe('Chicken Enchilada Slow Cooker Soup', ' This recipe goes together so easy with minimal prep. Chicken breasts with garlic powder, bacon, and rosemary are grilled. What could be better? Im always thinking up easy rosemary recipes, since my yard has 5 huge bushes of rosemary! Enjoy!  ' , 'assets/img/recipes/rec3.jpg', [new Ingredient('Meat', 1), new Ingredient('fish', 1)]), 
    new Recipe('Maple Salmon', 'Divide beans among bowls and top with the chicken.', 'assets/img/recipes/rec6.jpg', [new Ingredient('teaspoon salt', 2), new Ingredient('bean', 500)])

  ];

  getRecipes() {
    return this.recipes.slice();        // slice return a copy of recipes array
  }

  getRecipe(id: number) {
    return this.recipes[id]; 
  }

  addRecipe(recipeObj:Recipe){
    this.recipes.push(recipeObj);
    this.recipeChanged.next(this.recipes.slice());
    console.log(recipeObj);
    console.log(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipeObj:Recipe){
    this.recipes[index] = newRecipeObj;
    this.recipeChanged.next(this.recipes.slice());
    console.log(this.recipes[index]);
    console.log(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
    console.log('deleted');
    console.log(this.recipes.slice());
  }

  setRecipe(recipe :Recipe[]){
    this.recipes = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

}