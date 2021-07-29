import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

   //tried to inject the serivce
  constructor(private authservice : AuthService) { }

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
