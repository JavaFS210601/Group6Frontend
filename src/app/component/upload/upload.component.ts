import { Component, OnInit } from '@angular/core';

import { RecipeDTO } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';
import { FormControl, FormGroup, FormArray, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  //Example of a RecipeDTO:
  recipeDTO : RecipeDTO = {
    recipe_id: null,
    name: "recipe 1 test",
    description: "recipe 1 testing",
    category: "coco",
    inspiration: "cool",
    userId: 1,
    ingrediants:" coco-1b, gogo-2b, pojo-1b, jopo-10b",
    steps: "step1_stpe2_step2_step4"
  }


  ingredientCtrl = new FormControl();
  myForm = new FormGroup({
    ingredient: this.ingredientCtrl
  });
  ingredients = [
    'Salt',
    'Pepper',
    'Tomato',
    'Onion',
    'Egg',
    'Bread',
    'Flour',
    'Sugar',
    'Cornstarch',
    'Baking soda',
    'Pasta',
    'Corn flakes',
    'Rice',
    'Garlic',
    'Potato',
    'Ketchup',
    'Relish',
    'Soy Sauce',
    'Whipped cream',
    'Olive oil',
    'Oil',
    'Hot sauce',
    'Vinegar',
    'Honey',
    'Mustard',
    'Sesame oil',
    'Cooking spray',
    'Chicken broth',
    'Pasta sauce',
    'Tuna',
    'Cinnamon',
    'Basil',
    'Red pepper flakes',
    'Cayenne powder',
    'Bay leaf',
    'Ginger',
    'Adobo',
    'Rosemary',
    'Oregano',
    'Nutmeg',
    'Curry powder',
    'Cumin',
    'Dill',
    'Allspice',
    'Butter',
    'Milk',
    'Broccoli',
    'Carrot',
    'Spinach',
    'Peas',
    'Mozzarella Cheese',
    'Parmesan cheese',
    'Lemon',
    'Beans',
    'Chicken breast',
    'Chicken wings',
    'Chicken thigh',
    'Ground beef',
    'Ground turkey'
  ]



     

  ingForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService : RecipeService) {
    this.ingForm = this.fb.group({
      ingredients: this.fb.array([])
    });}

  ngOnInit() {
    this.recipeService.insertRecipe(this.recipeDTO).subscribe(
      data => console.log("this is recipe dto data" +data)
    )
    this.ingForm = this.fb.group({
      ingredients: this.fb.array([])
    });
  }

  ingredients1(): FormArray {
    return this.ingForm.get('ingredients') as FormArray;
  }

  newIngredient(): FormGroup {
    return this.fb.group({
      ingredient: '',
      amount: '',
    });
  }

  addIngredient() {
    this.ingredients1().push(this.newIngredient());
  }

  removeIngredient(ingIndex: number) {
    this.ingredients1().removeAt(ingIndex);
  }

  onSubmit() {
    console.log(this.ingForm.value);
  }
}