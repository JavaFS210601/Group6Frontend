import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //user: Observable<User> | undefined;
  user: any;
  constructor(private authservice: AuthService,private http: HttpClient, public router: Router) { 

   // this.authservice.login("ken3changee", "Very Patriotic");
    
  }

  ngOnInit(): void {
   

    // this.userService.
  }
  onSubmit(f: NgForm) {
    
    // Create observer object
    const loginObserver = {
      next: (x: number) => console.log('user logged in: '),
      error: (err: Error) => console.error(err)

    };
    //tried to to the login dont think this is correct
    console.log(f.value.username, f.value.password);
    //this.user = this.authservice.login(f.value.username, f.value.password);
    const formData = new FormData()
    formData.append("username" , f.value.username);
    formData.append("password", f.value.password);
   //this.user = this.userService.login(f.value.username, f.value.password)
   this.user = this.http.post<any>("http://localhost:8088/boot/users"+ "/authenticate",formData)
   .subscribe(
    data => {
      localStorage.setItem("username",  data.username );
      localStorage.setItem("id",  data.userId)
      localStorage.setItem("role",  data.role_id.role)
    }
    );
   
    //.subscribe(loginObserver);
    if( this.user) {
     
     this.router.navigate(['dashboard']); 
        
    }

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
