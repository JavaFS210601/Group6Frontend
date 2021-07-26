import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId : string | null;
  userRef : Observable<User>;
  constructor( private userService: UserService , private route: ActivatedRoute) {

    this.userId = this.route.snapshot.paramMap.get('id');

      this.userRef = this.userService.getUser(Number(this.userId));
      console.log(this.userRef);
   }

  ngOnInit(): void {
  }

}
