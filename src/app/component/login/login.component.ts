import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {

   // this.userService.
  }
  onSubmit(f: NgForm) {
    // Create observer object
const loginObserver = {
  next: (x: number) => console.log('user logged in: ' ),
  error: (err: Error) => console.error(err)

};
//tried to to the login dont think this is correct
    //this.authservice.login(f.value).subscribe(loginObserver);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
