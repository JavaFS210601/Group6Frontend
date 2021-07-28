import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { Step } from '../models/Step';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private ChefRecipesrl = 'http://localhost:8081/P2-ChefRecipes/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRecipeById(id: number): Observable<Recipe> | undefined{
    return this.http.get<Recipe>(this.ChefRecipesrl) 
    .pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Recipe>(`getHero id=${id}`)) 
    );
  }

  getRecipes(): Observable<Recipe[]> | undefined {
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
