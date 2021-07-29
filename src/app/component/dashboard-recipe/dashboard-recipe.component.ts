import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { Ingediant } from 'src/app/models/Ingediant';
import { User} from '../../models/User';

@Component({
  selector: 'app-dashboard-recipe',
  templateUrl: './dashboard-recipe.component.html',
  styleUrls: ['./dashboard-recipe.component.css']
})
export class DashboardRecipeComponent implements OnInit {

<<<<<<< Updated upstream
  recipes: Recipe[] = [{
    recipeId: 1,
    name: "Grilled Cheese",
    description: "Made with cheese, bread and butter",
    category: "Snack",
    inspiration: "Quick and easy snack",
    userId: 2,
    methodId: 1
  },
  {
    recipeId: 2,
    name: "Eggs",
    description: "Sunny side up eggs",
    category: "Breakfast",
    inspiration: "Quick breakfast",
    userId: 2,
    methodId: 2
  },
]
  ;
  constructor() { }
=======
//   recipes: Recipe[] = [{
//     recipeId: 1,
//     name: "Grilled Cheese",
//     description: "Made with cheese, bread and butter",
//     category: "Snack",
//     inspiration: "Quick and easy snack",
//     userId: 2,
//     methodId: 1
//   },
//   {
//     recipeId: 2,
//     name: "Eggs",
//     description: "Sunny side up eggs",
//     category: "Breakfast",
//     inspiration: "Quick breakfast",
//     userId: 2,
//     methodId: 2
//   },
// ] ;
user: User | undefined;
userRef: Observable<User[]>;

recipe: Recipe [] = [];
recipeRef: Observable<Recipe []> [] = [];
recipeRef2: Observable<Recipe []>;

recipeExtRef: Observable<RecipeExt []> [] = [];

ingrediant1: Ingrediant [] = [];
//ingredientRef2: Observable<Recipe []>;
recipeExtRef2: Observable<RecipeExt []>;
//ingrediantExt1: IngrediantExt;

constructor(private userService: UserService , private recipeService: RecipeService) {
  this.userRef = this.userService.getUsers();
  this.userService.getUser(1).subscribe (
    data => this.user = data
  )

  this.recipeRef[0]= this.recipeService.getRecipes();

  this.recipeRef2=this.recipeService.getRecipes();
  this.recipeExtRef2=this.recipeService.getRecipesExt();

  
    //this.recipeExtRef[0] = this2recipeService.getRecipesExt()
    //this.recipeParser()
    //this.ingrediantParser();

} 
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  recipe2Parser(){
    this.recipeRef2.subscribe(
      data => {
        console.log("all recipes" 
        + data[0] + " " + data[1])
      }
    )
  }
  


/*
  recipeParser(){
    this.recipeRef[0].subscribe(
      data =>  {
        console.log("!!! recipes recieved "
        + data[0].recipe_id  + " " + data[0].description + " "
         +" inspiration:" + data[0].inspiration  + " "  + data[0].name  + " "
         + data[0].category ); 
          this.recipe[0] = data[0];
      } 

     
    )
  }*/
/*
  ingrediantParser(){
    this.recipeExtRef[0].subscribe(
      data =>  {
        console.log("!!! recipes recieved "
        + " amount:" +  data[0]
          ); 
           
          console.log(data[0]['recipeIngrediants'] );
          let subvalue = data[0]['recipeIngrediants']
          this.ingrediant1 =  subvalue[0]['ingrediant'] ;
          console.log(this.ingrediant1.ammount );
      } 
    )
  }*/
>>>>>>> Stashed changes
}
