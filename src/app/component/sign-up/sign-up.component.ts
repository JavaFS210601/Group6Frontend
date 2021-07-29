import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/service/auth.service';

import { Observable } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


   //tried to inject the serivce
  constructor(private authservice : AuthService) { }

  role: Role = {
   role_id: 1,
   role: "employye"
 };
  user: User = {
    userId: 1,
    username: 'registerkenny',
    password: 'pwd',
    first_name: 'ken',
    last_name: 'eng',
    role_id:  this.role,
    recipe_id: 1
  };

  retUser : Observable<User>
  constructor(userService: UserService, authService : AuthService) {
       
      
      this.retUser  = authService.register(this.user);

  }


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
    //this.authservice.register(f.value).subscribe(registerObserver);

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false


  }
}
