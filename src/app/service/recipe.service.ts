import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { Step } from '../models/Step';
import { Recipe,  RecipeDTO,  RecipeExt } from '../models/Recipe';
import { FormControl } from '@angular/forms';
//put this back in this above RecipeDTO

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
  
  //api here with the key I wil most likely have to interpolate the query in this api Food data from USDA
  private apiKey = 'TyfoArR5KncmZdQ7kO2KntcjEnDhAoEgU3QGczBv';

  //this might be in correct it was private apiSearch ="apple"
 //public apiSearch: string | undefined;
public apiSearch = "orange";
//searchFood = new BehaviorSubject<string>('');
 //apiSearch = new BehaviorSubject<string>('');

// foods: Observable<string[]>=this.apiSearch .pipe(
//   debounceTime(500),
//   switchMap(apiSearch  =>{
//     return this.http.get<any>('https://api.nal.usda.gov/fdc/v1/foods/search?query='+this.apiSearch+'&pageSize=2&api_key='+this.apiKey);
//   }),
//   map((foods: [description: any]) => foods.map(foods.description))) ;

  constructor(private http: HttpClient) { }

  
  //Chani trying to make the api call with the method
  getFood(term: string):Observable<any>{
    //unsure what to put in the wery section in the this is the example I got from the API website
    this.apiSearch = term;
    //this is the example they give me
    // https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=TyfoArR5KncmZdQ7kO2KntcjEnDhAoEgU3QGczBv
    // forgot angular is OOP so had to use this keyword thaks Golam
    debounceTime(10000)
    return this.http.get<any>('https://api.nal.usda.gov/fdc/v1/foods/search?query='+this.apiSearch+'&pageSize=10&api_key='+this.apiKey)
    
    //trying a different appoach to try to sync it to the typehead
    
    // return this.http.get<any>('https://api.nal.usda.gov/fdc/v1/foods/search?query='+this.apiSearch+'&pageSize=2&api_key='+this.apiKey).pipe(
    //   map((res: any) => res),
    //   catchError(error => throwError(error))
    // );
    // this.apiSearch.next(this.ingredientSearchTextInput.value);
  }

  getRecipeExtById(id: number): Observable<RecipeExt > {
    return this.http.get<RecipeExt>(this.ChefRecipesrl+"/recipe/" + id) 
    .pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<RecipeExt>(`getRecipeExt id=${id}`)) 
    );
  }

  getRecipeExtByUserId(id: number): Observable<RecipeExt []> {
    return this.http.get<RecipeExt []>(this.ChefRecipesrl+"/" + id) 
    .pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<RecipeExt []>(`getRecipeExt id=${id}`)) 
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

  /* GET heroes whose name contains search term */
  searchRecipes(term: string): Observable<RecipeExt[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    // return this.http.get<RecipeExt[]>(this.ChefRecipesrl)
    // .pipe(
    //   catchError(this.handleError<RecipeExt[]>('getRecipesExt', []))
    // );

    return this.http.get<RecipeExt[]>(`${this.ChefRecipesrl}/search?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found recipes matching "${term}"`) :
         this.log(`no recipes matching "${term}"`)),
      catchError(this.handleError<RecipeExt[]>('searchHeroes', []))
    );
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
