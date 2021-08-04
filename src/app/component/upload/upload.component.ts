import { Component, OnInit } from '@angular/core';

import { RecipeDTO } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})



export class UploadComponent implements OnInit {

  //Example of a RecipeDTO:
  recipeDTO: RecipeDTO = {
    recipe_id: null,
    name: "recipe 1 test",
    description: "recipe 1 testing",
    category: "coco",
    inspiration: "cool",
    userId: 1,
    ingrediants: " coco-1b, gogo-2b, pojo-1b, jopo-10b",
    steps: "step1_stpe2_step2_step4"
  }

  CategoryCtrl = new FormControl();
  categoryForm = new FormGroup({
    categorys: this.CategoryCtrl
  });
  categorys = [
    'Vegetables',
    'Protein',
    'Fruits',
    'Grains',
    'Dairy',
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

  nameForm: FormGroup;

  otherForm: FormGroup;

  stepForm:  FormGroup;

  foods: string = " ";

  term: string = " ";
  //this is my second attempt but trying to sync api to the typehead
  // foods: [description: any] | undefined;

  ingForm: FormGroup;
  foodAPI: any | undefined = []

  //this is for my attempt at connecting the api to the typeahead
  //foodIngredient = new FormControl();

  // myFormAPI = new FormGroup({
  //   foods: this.foodIngredient
  // });

  constructor(private fb: FormBuilder, private recipeService: RecipeService,public router: Router) {
    this.nameForm = this.fb.group({
      recipeName: ""
    })
    

    this.ingForm = this.fb.group({
      ingredients: this.fb.array([])
    });

    this.otherForm = this.fb.group({
      description: "",
      inspiration: ""
    })

    this.stepForm = this.fb.group({
      steps: this.fb.array([])
    });
  }

  ngOnInit() {
    //  this.recipeService.insertRecipe(this.recipeDTO).subscribe(
    //    data => console.log("this is recipe dto data" +data)
    //  )


    this.ingForm = this.fb.group({
      ingredients: this.fb.array([]),
     
    });

    this.stepForm = this.fb.group({
      steps: this.fb.array([])
    });

    //chani: was taken fromthe getFoods method in the reciepe service
    this.recipeService.getFood(this.term).subscribe(
      response => {
        
        length = Object.keys(response['foods']).length
        for (let i = 0 ; i <  length  ; i++){
          let item = response['foods'][i].description;
          console.log(i + " -  " + response['foods'][i])
  
          this.foodAPI[i] = item;
        }
        // this.foods = response['foods'][0].description;
        // console.log(response['foods'][0].description)

        // this.foodAPI[0] = this.foods;

      })


        this.otherForm = this.fb.group({
          description: "write your recipe description here!",
          inspiration: "What inspire you do this?"
        });

  }

  callAPI(index : number){
    this.term = this.ingForm.value.ingredients[index]['ingredient']  // put data in ingForm into term
      //chani: was taken fromthe getFoods method in the reciepe service
      debounceTime(10000)
      this.recipeService.getFood(this.term).subscribe(
        response => {
  
           //this.foods = response['foods'][0].description;
          console.log(response['foods'])
  
          // this.foodAPI[0] = this.foods;
          length = Object.keys(response['foods']).length
          for (let i = 0 ; i <  length  ; i++){
            let item = response['foods'][i].description;
            console.log(i + " -  " + response['foods'][i])
    
            this.foodAPI[i] = item;
          }
  
        })
      
  }
  stepInit() : FormArray {
    return this.stepForm.get('steps') as FormArray;
  }

  newStep(): FormGroup {
    return this.fb.group({
      step: ''
    });
  }
  addStep() {
    this.stepInit().push(this.newStep());
  }
  removeStep(stepIndex: number) {
    this.stepInit().removeAt(stepIndex);
  }

  ingredients1(): FormArray {
    return this.ingForm.get('ingredients') as FormArray;
  }

  newIngredient(): FormGroup {
   // this.ingredients.push(new FormControl(''));
   //this.ingredients1().push(new FormControl(''));
    return this.fb.group({
      ingredient: '',
      
      amount: '',
      ingredientSelect: '',
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
     // console.log(this.myForm.value);
      console.log(this.otherForm.value);
      console.log(this.stepForm.value);
    //  console.log(this.myFormAPI.value);
     // console.log(this.ingForm.value.ingredients2[0]['ingredient']);
      let name = this.nameForm.value.recipeName;
      let description = this.otherForm.value.description;
      let inspiration = this.otherForm.value.inspiration;
      let category = this.categoryForm.value.categorys;

      // parse ingredient inputs 
      let ingrediantsString = "";
      let stepString = "";
      let ingSize = Object.keys(this.ingForm.value.ingredients).length;
      let stepSize = Object.keys(this.stepForm.value.steps).length;
      for ( let i = 0 ; i < ingSize ;i++){
        let ingredientSelect =  this.ingForm.value.ingredients[i]['ingredientSelect'].replace(/,/g, ' ').replace('-', ' ');
        
        let amount = this.ingForm.value.ingredients[i]['amount'].replace(',', ' ').replace('-', ' ');
        
        if (ingredientSelect === "" || amount === "") {
          alert("please fill in all ingredients and amount");
          break;
        }
        if (i === (ingSize-1) ){
           ingrediantsString += ingredientSelect  + "-"
          + amount ;
        } else {
           ingrediantsString += ingredientSelect + "-"
            + amount+ ", ";
        }

        // parse step inputs 
        
        
        for ( let s = 0 ; s < stepSize ;s++){
          let stepEntered =  this.stepForm.value.steps[s]['step'].replace(/,/g, ' ').replace('-', ' ');
          if (stepEntered === "") {
            alert("please fill in steps");
            break;
          }
          if (i === (stepSize-1) ){
            stepString  += stepEntered ;
          } else {
            stepString += stepEntered + ", ";
          }
        }

      }
      console.log("the recipe :" + stepString);
      // let ingrediantsString = this.ingForm.value.ingredients[0]['ingredient'] + "-"
      //   + this.ingForm.value.ingredients[0]['amount'] + ", ";
      // + this.myForm.value.ingredient + "-1b";

      this.recipeDTO2 = {
        recipe_id: null,
        name: name,
        description: description,
        category: category,
        inspiration: inspiration,
        userId: 1,
        ingrediants: ingrediantsString,
        steps: stepString

      }
      
      if (name === ""  ) {

        alert("please fill in recipe name")
      } else {
        // #uncomment to send creating new Recipe below 
        this.recipeService.insertRecipe(this.recipeDTO2).subscribe(
          data => console.log("this is recipe dto data" +data)
        )
        alert("new recipe is created")
        this.router.navigate(['dashboard']);
      }

    } catch (err) {
      alert("please fill in all values")
    }

  }

  

}