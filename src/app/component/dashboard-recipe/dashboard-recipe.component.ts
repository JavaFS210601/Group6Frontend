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

  ngOnInit(): void {
  }

}
