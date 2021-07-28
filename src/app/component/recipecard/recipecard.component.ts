import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { Ingediant } from 'src/app/models/Ingediant';
import { User} from '../../models/User';

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.css']
})
export class RecipecardComponent implements OnInit {

  recipes: Recipe[] = [{
    recipeId: 1,
    name: "Toast",
    description: "Toast made on a pan with butter",
    category: "Breakfast",
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
