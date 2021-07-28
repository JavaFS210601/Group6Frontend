import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { Ingediant } from 'src/app/models/Ingediant';
import { Step } from 'src/app/models/Step';
import { RecipeService } from 'src/app/service/recipe.service';
import { UserService } from 'src/app/service/user.service';
import { User} from '../../models/User';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 // userService : UserService | undefined;
 //heroRef: Observable<Hero[]>;
 userRef: Observable<User[]>;

//  role: Role {
//    role_id: 1;
//    role: "employye"
//  };
//   user: User = {
//     user_id: 1,
//     username: 'kenny',
//     password: 'pwd',
//     first_name: 'ken',
//     last_name: 'eng',
//     role_id:  role,
//     recipe_id: 1
//   };

  // item: Ingediant = {
  //   ingrediantId: 1,
  //   ingrediant: "coconuts",
  //   amount: 200
  // };

  // itemList: Ingediant[] = [];

  //heroes: Hero[] = [];

  steps: Step[] = [];

  constructor(private userService: UserService , private recipeService: RecipeService) { 
    //this.userService = userService;
    //this.heroRef = this.userService.getHeros();
    this.userRef = this.userService.getUsers();

    this.steps = this.recipeService.getRecipeSteps();
  }

  ngOnInit(): void {
     
    
  }

  getHero(){
    //this.heroRef = this.userService.getHeros();

  }



}
