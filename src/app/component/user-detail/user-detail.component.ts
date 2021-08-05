import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  max = 10;
  rate = 7;
  isReadonly = false;
 
  username : string = "" ;
 password: string = "";

  userId : string | null;
 user: User | undefined;
  constructor( private userService: UserService , 
    private route: ActivatedRoute,
    private location: Location) {

    this.userId = this.route.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.getUser();

  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }
 
  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

  /*
  Getting data from backend with service object. 
  Use subscribe method of the Observable to assign the local varible user data.
  */
  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    //alert("id is " + id);
    this.userService.getUser(id)
      .subscribe(data => this.user = data);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

}
