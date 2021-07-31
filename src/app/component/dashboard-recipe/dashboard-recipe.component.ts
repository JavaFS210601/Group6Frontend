import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeExt } from '../../models/Recipe';
import { Ingrediant } from 'src/app/models/Ingrediant';
import { User} from '../../models/User';
import { UserService } from 'src/app/service/user.service';
import { RecipeService } from 'src/app/service/recipe.service';
import { Observable } from 'rxjs';
import { Step } from 'src/app/models/Step';
import { LinkedList } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-dashboard-recipe',
  templateUrl: './dashboard-recipe.component.html',
  styleUrls: ['./dashboard-recipe.component.css']
})
export class DashboardRecipeComponent implements OnInit {

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

recipe: Recipe | undefined;
// recipeRef: Observable<Recipe []>;
recipeRef2: Observable<Recipe []>;

recipeExtRef: Observable<RecipeExt []>;

ingrediant1: Ingrediant[] | undefined;
myList: any;

step1: Step[]| undefined;
//ingrediantExt1: IngrediantExt;

constructor(private userService: UserService , private recipeService: RecipeService) {
  this.userRef = this.userService.getUsers();
  this.userService.getUser(1).subscribe (
    data => this.user = data
  )

  // this.recipeRef = this.recipeService.getRecipes();

  
  this.recipeRef2=this.recipeService.getRecipes();
  
  this.recipeExtRef = this.recipeService.getRecipesExt()
    // this.recipeParser()
    
    this.recipe2Parser();
    //this.ingrediantParser();

} 

  ngOnInit(): void {
  }

  recipe2Parser(){
    this.recipeRef2.subscribe(
      data => {
        console.log("all recipes " 
        + data[0] + " " + data[1].name)
      }
    )
  }

  // recipeParser(){
  //   this.recipeRef.subscribe(
  //     data =>  {
  //       console.log("!!! recipes recieved "
  //       + data[0].recipe_id  + " " + data[0].description + " "
  //        +" inspiration:" + data[0].inspiration  + " "  + data[0].name  + " "
  //        + data[0].category ); 
  //         this.recipe = data[0];
  //     } 

 ingreOuterArray: any[] = [];

  ingrediantParser(){
    this.recipeExtRef.subscribe(
      data =>  {
        console.log("!!! recipes recieved "
        + " amount:" +  data[0]
          ); 
          
          console.log(data[0]['steps'][0].step_id + data[0]['steps'][0].step  );
        // let subvalue = data[0]['recipeIngrediants']
          this.ingrediant1 =  data[0]['ingrediants'];
          this.myList =  data;
          this.step1 = data[0]['steps'];

          
      } 
      
    )
  }

  
}
