import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { UserService } from 'src/app/service/user.service';
import { User} from '../../models/User';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 // userService : UserService | undefined;
 //heroRef: Observable<Hero[]>;
 userRef: Observable<User[]>;
  // user: User = {
  //   id: 1,
  //   username: 'kenny',
  //   password: 'pwd',
  //   firstname: 'ken',
  //   lastname: 'eng',
  //   roleId: 1,
  //   recipeId: 1
  // };

  heroes: Hero[] = [];

  constructor(private userService: UserService) { 
    //this.userService = userService;
    //this.heroRef = this.userService.getHeros();
    this.userRef = this.userService.getUsers();
  }

  ngOnInit(): void {
     
          
      
  }

  getHero(){
    //this.heroRef = this.userService.getHeros();

  }

}
