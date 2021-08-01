import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

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

  constructor(public router: Router) { this.user_id = localStorage.getItem("id"); }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.setItem("username", "");
    localStorage.setItem("id",  "")
    localStorage.setItem("role", "")
    this.router.navigate(['home']);
  }

}
