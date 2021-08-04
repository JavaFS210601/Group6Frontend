import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private searchTerms = new Subject<string>();

  user_id : string | null;
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);

    
  }

  constructor(public router: Router , private auth : AuthService) {
     this.user_id = localStorage.getItem("id");
    
   
 }

  ngOnInit(): void {
    //this.user_id = localStorage.getItem("id");

    this.auth.getLoggedInName.subscribe(name =>
      {
        if(name === "loggedin") {
          this.user_id = localStorage.getItem('id') 
        };
      }  
     );
  }

  logOut() {
    // localStorage.setItem("username", "");
    // localStorage.setItem("id",  "")
    // localStorage.setItem("role", "")
    localStorage.clear();
    this.user_id = "";
    this.router.navigate(['home']);
  }

}
