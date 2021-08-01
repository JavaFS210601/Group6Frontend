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
  
  CategoryCtrl= new FormControl();
  categoryForm = new FormGroup({
    categorys: this.CategoryCtrl
  });
  categorys = [
    'food',
    'coconut',
    'water'
  ]

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

  nameForm : FormGroup;

  otherForm : FormGroup;

  ingForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService : RecipeService) {
    this.nameForm = this.fb.group({
      recipeName: ""
    })

    this.ingForm = this.fb.group({
      ingredients: this.fb.array([])
    });

    this.otherForm = this.fb.group({
      description : "",
      inspiration : ""
    })
  }

  ngOnInit() {
    // this.recipeService.insertRecipe(this.recipeDTO).subscribe(
    //   data => console.log("this is recipe dto data" +data)
    // )

    this.ingForm = this.fb.group({
      ingredients: this.fb.array([ ])
    });

    this.otherForm = this.fb.group({
      description: "write your recipe description here!",
      inspiration : "What inspire you do this?"
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

 

  recipeDTO2: RecipeDTO | undefined
  onSubmit() {
   try {
      console.log(this.ingForm.value);
      console.log(this.myForm.value);
      console.log(this.otherForm.value);
      let name = this.nameForm.value.recipeName;
      let description = this.otherForm.value.description;
      let inspiration = this.otherForm.value.inspiration;
      let category = this.categoryForm.value.categorys;
      let ingrediantsString = this.ingForm.value.ingredients[0]['ingredient'] + "-"
        + this.ingForm.value.ingredients[0]['amount'] + ", ";
       // + this.myForm.value.ingredient + "-1b";

      this.recipeDTO2 = {
        recipe_id: null,
        name: name ,
        description: description,
        category: category,
        inspiration: inspiration,
        userId: 1,
        ingrediants: ingrediantsString,
        steps: "step1_stpe2_step2_step4"

      }
      console.log(this.recipeDTO2);

      // #uncomment to send creating new Recipe below 
      // this.recipeService.insertRecipe(this.recipeDTO2).subscribe(
      //   data => console.log("this is recipe dto data" +data)
      // )
      
     } catch(err) {
        alert("please fill in all values")
      }
   
  }
}