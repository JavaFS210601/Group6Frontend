import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { RecipeService } from 'src/app/service/recipe.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User | undefined;
 // userRef: Observable<User[]>;
  constructor(private userService: UserService , private recipeService: RecipeService) {
   // this.userRef = this.userService.getUsers();
   if (localStorage.getItem("id") !== null && localStorage.getItem("id") !== "" ){
    let id_string: any = localStorage.getItem("id")
    const id: number | null = parseInt(id_string);
     this.userService.getUser(id).subscribe (
       data => this.user = data
     )
   }
   
  }

  ngOnInit(): void {
     

  }

}
