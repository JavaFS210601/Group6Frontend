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


  isAuthenticated() {
    //if localstorage has the user information , return user is login.
    if(localStorage.getItem("username")) { 
      return true;
    } else {
       // redirect to login page. 
    }
    


        alert(this.isLogin);

        // alert(localStorage.getItem("username"));
        
       
       
    return true;
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


