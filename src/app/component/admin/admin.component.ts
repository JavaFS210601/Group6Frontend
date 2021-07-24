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
 heroRef: Observable<Hero[]>;
  user: User = {
    id: 1,
    username: 'kenny',
    password: 'pwd',
    firstname: 'ken',
    lastname: 'eng',
    roleId: 1,
    recipeId: 1
  };

  heroes: Hero[] = [];

  constructor(private userService: UserService) { 
    //this.userService = userService;
    this.heroRef = this.userService.getHeros();
  }

  ngOnInit(): void {
     
          
      
  }

  getHero(){
    let heroObserver = this.userService.getHeros();
    // heroObserver.subscribe(
    //   (data:Hero[]) => { this.heroes=data; }, 

    //   () => {
    //     this.heroes = [];
    //     console.log("Something went wrong catching your pokemon!!!")
    //   }
    // );

  }

}
