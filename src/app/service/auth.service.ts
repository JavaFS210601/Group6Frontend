import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, isEmpty, switchMap } from 'rxjs/operators';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {

  }

  /*
     Check if the user is authenticated
   */
  isAuthenticated(): number {
    //if localstorage has the user information , return user is login.
    if (localStorage.getItem("username") !== "") {
      console.log(localStorage.getItem("username") + " is logged in");

      if (localStorage.getItem("role") === "manager") {
        return 1;
      } else {
        return 3;
      }


    } else {
      this.router.navigate(['login']);
    }


    return 0;
  }


  /*
     it is used to update the navbar when user log in.
   */
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  login(): Observable<boolean> {
    if (this.isAuthenticated() > 0) {
      this.getLoggedInName.emit('loggedin');
      return of(true);
    } else {
      this.getLoggedInName.emit('Sign In');
      return of(false);
    }
  }

  /*
  it is used to update the navbar when user log out
   */
  logout(): void {
    this.getLoggedInName.emit('Sign In');
  }

  /*
   A method used to register new user
   */
  register(user: User): Observable<User> {

    //const data = JSON.stringify(user)

    return this.http.post<User>("http://localhost:8088/boot/users/register", user, this.httpOptions)

    console.log(user);

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


