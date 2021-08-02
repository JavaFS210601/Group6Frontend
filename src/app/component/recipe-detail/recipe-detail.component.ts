import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingrediant } from 'src/app/models/Ingrediant';
;
import { Recipe, RecipeExt } from 'src/app/models/Recipe';
import { Step } from 'src/app/models/Step';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
 // @Input() recipeExtRef: Observable<RecipeExt > | undefined;
  recipeExtRef : Observable<RecipeExt >  | undefined
  recipeExt : RecipeExt | undefined
  ingrediant1: Ingrediant[] | undefined;
  step1: Step[]| undefined;
  recipeId : string | null;
  
  constructor(private recipeService: RecipeService , private route: ActivatedRoute) { 
    
   this.recipeId = this.route.snapshot.paramMap.get('id');
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
   this.recipeExtRef = this.recipeService.getRecipeExtById(id);
    this.ingrediantParser();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeId  = params.get('id');
   
      //business logic what changes you want on the page with this new data.
      });
  }

  ingrediantParser(){
   
    if (this.recipeExtRef != null){
      this.recipeExtRef.subscribe(
        data =>  {
          this.recipeExt = data;
          console.log(data)
        }
      )
     // this.ingrediant1 = this.recipeExtRef['ingrediants'];
    }
     
    // this.recipeExtRef.subscribe(
    //   data =>  {
    //     console.log("!!! recipes recieved "
    //     +  data
    //       ); 
          
    //     // console.log(data['steps'][0].step_id + data['steps'][0].step  );
       
    //       this.ingrediant1 =  data['ingrediants'];
    //       console.log(this.ingrediant1)
    //        this.step1 = data['steps'];

          
    //   } )
  }
}
