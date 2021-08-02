import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeExt } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipes-show-case',
  templateUrl: './recipes-show-case.component.html',
  styleUrls: ['./recipes-show-case.component.css']
})
export class RecipesShowCaseComponent implements OnInit {

  recipeExtRef: Observable<RecipeExt []>;

  constructor(private recipeService: RecipeService) {
    this.recipeExtRef = this.recipeService.getRecipesExt()
  }

  ngOnInit(): void {
  }

}
