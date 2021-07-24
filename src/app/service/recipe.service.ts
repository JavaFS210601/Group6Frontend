import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/User';

import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipeById(id: number): Observable<Recipe> | undefined{
    return undefined;
  }

  getRecipes(): Observable<Recipe[]> | undefined {
    return undefined;
  }
}
