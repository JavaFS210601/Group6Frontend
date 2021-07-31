import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { Step } from '../models/Step';
import { Recipe, RecipeDTO, RecipeExt } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private ChefRecipesrl = 'http://localhost:8088/boot/recipes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  //got this from the api website https://fdc.nal.usda.gov/api-guide.html#bkmk-8
  //foods: [description: any] | undefined;
  foods: [description: any] | undefined;
  //api here with the key I wil most likely have to interpolate the query in this api Food data from USDA
  private apiKey = 'TyfoArR5KncmZdQ7kO2KntcjEnDhAoEgU3QGczBv';
 private apiSearch = 'apple';

  constructor(private http: HttpClient) { }

  //Chani trying to make the api call with the method
  getFood():Observable<any>{
    //unsure what to put in the wery section in the this is the example I got from the API website
    
    //this is the example they give me
    //https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=TyfoArR5KncmZdQ7kO2KntcjEnDhAoEgU3QGczBv
    //forgot angular is OOP so had to use this keyword thaks Golam
    return this.http.get<any>('https://api.nal.usda.gov/fdc/v1/foods/search?query='+this.apiSearch+'&pageSize=2&api_key='+this.apiKey)
  }
  getRecipeExtById(id: number): Observable<RecipeExt> {
    return this.http.get<RecipeExt>(this.ChefRecipesrl) 
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<RecipeExt>(`getRecipeExt id=${id}`)) 
    );
  }

  getRecipesExt(): Observable<RecipeExt[]>  {
    return this.http.get<RecipeExt[]>(this.ChefRecipesrl)
    .pipe(
      catchError(this.handleError<RecipeExt[]>('getRecipesExt', []))
    );
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.ChefRecipesrl) 
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`)) 
    );
  }

  getRecipes(): Observable<Recipe[]>  {
    return this.http.get<Recipe[]>(this.ChefRecipesrl)
    .pipe(
      catchError(this.handleError<Recipe[]>('getUsers', []))
    );
  }

  // test data
  step: Step = {
    step_id: 1,
    step: "step1"
  }
  steps : Step[] = [];
   //  test data

  getRecipeSteps() : Step[]{
    this.steps.push(this.step);
    return this.steps;
  }

  /*
    Recipe data:
      name,  description,  category, inspiration, userId ,ingrediants , steps;
  */
  insertRecipe( recipe : RecipeDTO) : Observable<RecipeDTO> {
      return this.http.post<RecipeDTO>(this.ChefRecipesrl , recipe  , this.httpOptions);
      // .pipe(
      //   catchError(this.handleError<Recipe[]>('insertRecipe'))
      // )
  }

   /*
  Error handling method provided by offical angular tutorial
  which will get call if the http request occurs error.
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /*
  method that log the error message
  */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message);
   }
}
