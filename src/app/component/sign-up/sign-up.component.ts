import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  users: User[] = [];

   //tried to inject the serivce
  constructor(private authservice : AuthService, public http : HttpClient ,private router: Router) { }
     
  // all new user is client
    role: Role = {
    role_id: 1,
    role: "employye"
  };
  user: User = {
   userId: null,
    username: 'registerkenny',
    password: 'pwd',
    first_name: 'ken',
    last_name: 'eng',
    role_id:  this.role
  };

  userRef : Observable<User> | undefined
  
  ngOnInit(): void {
     
  }

 //tried to do somthing simlar what I did in the login but with registar method that is in auth.service
  onSubmit(f: NgForm) {
      // Create observer object
const registerObserver = {
  next: (x: number) => console.log('user created: ' ),
  error: (err: Error) => console.error(err)

};
//tried to to the login dont think this is correct
      
      // update the user with the data from the form
      this.user.username = f.value.username;
      this.user.first_name = f.value.first_name;
      this.user.last_name = f.value.last_name;
      this.user.password = f.value.password;
      
      this.authservice.register(this.user)
      .subscribe(newUser => {
        this.users.push(newUser);
        alert(" Welcome" + newUser.first_name);
        this.router.navigate(['home']);
      });
  
  
      
    // this.http.post<any>('http://localhost:8088/boot/users/register', )
    // .subscribe(
    //   data => localStorage.setItem("username", data.username);
    //  );

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false


  }
}
