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

  //private isLogin: boolean;

  private serverUrl = 'http://localhost:8088/boot/users';
  private createUrl = 'http://localhost:8088/boot/register';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient , private userService: UserService ,private router: Router) { 

      // this.heroName = "";
      // this.isLogin = false;
      // const myObserver = {
      //   next: (x: Hero) => x != undefined ? this.isLogin = true: this.isLogin = false,
      //   error: (err: Error) => console.error('Observer got an error: ' + err),
      //   complete: () => console.log('Observer got a complete notification'),
      // };

     /// let observabledata = userService.getHero(1);
    ///  observabledata.subscribe(myObserver);
  }


  isAuthenticated() {
    //if localstorage has the user information , return user is login.
    if(localStorage.getItem("username")) { 
      return true;
    } else {
       // redirect to login page. 
    }
  
        // make a backend call to find the user by username and pwd
       
       
    return true;
  }

  login(username: string, password: string) : Observable<User>{
    return this.http.post<User>(`${this.serverUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //localStorage.setItem('user', JSON.stringify(user));
           // this.userSubject.next(user);
            return user;
        }));
  }

  //here is the method to create a new user this might need to be adjusted
  register(model: any){
    let headers = new HttpHeaders({
      'formData': this.formData
//this section is most likely wrong I am not 100 percent sure what to do
    });
    //options this is probably wrong
    let options = {headers:headers};
    return this.http.post(this.createUrl + 'create', model, options);
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


