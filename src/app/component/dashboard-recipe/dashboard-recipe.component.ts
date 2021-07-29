import { Component, OnInit } from '@angular/core';
import { Recipe, RecipeExt } from '../../models/Recipe';
import { Ingrediant, IngrediantExt } from 'src/app/models/Ingrediant';
import { User} from '../../models/User';
import { UserService } from 'src/app/service/user.service';
import { RecipeService } from 'src/app/service/recipe.service';
import { Observable } from 'rxjs';

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
recipeRef: Observable<Recipe []>;

recipeExtRef: Observable<RecipeExt []>;

ingrediant1: Ingrediant | undefined;
//ingrediantExt1: IngrediantExt;

constructor(private userService: UserService , private recipeService: RecipeService) {
  this.userRef = this.userService.getUsers();
  this.userService.getUser(1).subscribe (
    data => this.user = data
  )

  this.recipeRef = this.recipeService.getRecipes();

  
  
    this.recipeExtRef = this.recipeService.getRecipesExt()
    this.recipeParser()
    this.ingrediantParser();

} 

  ngOnInit(): void {
  }

  recipeParser(){
    this.recipeRef.subscribe(
      data =>  {
        console.log("!!! recipes recieved "
        + data[0].recipe_id  + " " + data[0].description + " "
         + data[0].inspiration  + " "  + data[0].name  + " "
         + data[0].category ); 
  
      } 

     
    )
  }

  ingrediantParser(){
    this.recipeExtRef.subscribe(
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
  }
}
