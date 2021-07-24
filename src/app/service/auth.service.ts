import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, isEmpty, switchMap } from 'rxjs/operators';
import { User} from '../models/User';
import { Hero } from '../models/Hero';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin: boolean;
  private heroName : string ;

  private serverUrl = 'http://localhost:8081/HelloSpringMVC/avengers';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient , private userService: UserService ,private router: Router) { 

      this.heroName = "";
      this.isLogin = false;
      const myObserver = {
        next: (x: Hero) => x != undefined ? this.isLogin = true: this.isLogin = false,
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification'),
      };

      let observabledata = userService.getHero(1);
      observabledata.subscribe(myObserver);
  }

  getHeros(): Observable<Hero[]> {
   // const heroes = of(HEROES);
    return this.http.get<Hero[]>(this.serverUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((name) =>   localStorage.setItem('username', name.heroName)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  isAuthenticated() {
    //if localstorage has the user information , return user is login.
    if(localStorage.getItem("username")) { return true;}
    
   
    let heroFromHome =   this.getHero(1);
  
    // heroFromHome.pipe(switchMap(isAuth => {
    //         if (isAuth) {
    //           return "true";
    //         } else {
    //             return "false";
    //         }
    //     }));

    // Create observer object
        

        heroFromHome.subscribe({
          next:name => { console.log(name.heroName); 
                this.heroName = name.heroName;
                alert("Welcome back " + this.heroName ); 
                
            
                
          },
          error(err: Error){
            console.error('Observer got an error: ' + err);
            
          },
          complete() { 
            console.log('Finished sequence');
            
          }
        });

        alert(this.isLogin);

        // alert(localStorage.getItem("username"));
        
       
       
    return this.isLogin;
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${this.serverUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //localStorage.setItem('user', JSON.stringify(user));
           // this.userSubject.next(user);
            return user;
        }));
  }


  private log(message: string) {
   //this.messageService.add(`HeroService: ${message}`);
   console.log(message);
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

}


