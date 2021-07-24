import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User} from '../models/User';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverUrl = 'http://localhost:8081/HelloSpringMVC/avengers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
   // const heroes = of(HEROES);
    return this.http.get<Hero[]>(this.serverUrl);
    // .pipe(
    //   catchError(this.handleError<Hero[]>('getHeroes', []))
    // );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<Hero>(url) as Observable<Hero>;
    
    // .pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
  }

  getUsers(): Observable<User[]> {
    // const heroes = of(HEROES);
     return this.http.get<User[]>(this.serverUrl)
     .pipe(
       catchError(this.handleError<User[]>('getHeroes', []))
     );
   }

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
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
    console.log(message);
   }
}
