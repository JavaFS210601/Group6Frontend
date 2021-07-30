import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
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

  constructor(private fb: FormBuilder) {
    this.ingForm = this.fb.group({
      ingredients: this.fb.array([])
    });}

  ngOnInit() {
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