import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { Ingrediant } from 'src/app/models/Ingrediant';
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


 userRef: Observable<User[]>;

  steps: Step[] = [];

  constructor(private userService: UserService , private recipeService: RecipeService) { 
 
    this.userRef = this.userService.getUsers();

    this.steps = this.recipeService.getRecipeSteps();
  }

  ngOnInit(): void {
     
    
  }




}
