import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recpe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm() {      //responsible to initialize the form

    let name = "";
    let imagePath = "";
    let description = "";
    let recipeIngredients = new FormArray([]); //this is an empty array/ uses to store the ingrediants objects

    if (this.editMode) {

      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      console.log('update');
    }
    else {
      this.recipeService.addRecipe(newRecipe);
      console.log('add');
    }
    //console.log(this.recipeForm);
    this.onCancel();
  }
  

  onAddIngredient() {   //aluth form input ontrollers add karanna use karanne
    (<FormArray>this.recipeForm.get('ingredients')).push(  // recipeForm kiyanne FormGroup ekak ake ingredient array eka thynne form Array ekak widihata.         
      new FormGroup({                                       //a formArray eka athule values 2k thynawa.a hinda aka aluth formgroup ekak
        'name': new FormControl(null, Validators.required),                          //me methode eken karanne danata thyana formArray eka (Angular dan na meka formArray ekak kiyala. a hindai cast karanne) FormArray ekakata cast karala akata aluth formGroup ekak adda karana eka.
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(i) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

}
