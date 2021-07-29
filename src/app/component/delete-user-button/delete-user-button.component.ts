import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-delete-user-button',
  templateUrl: './delete-user-button.component.html',
  styleUrls: ['./delete-user-button.component.css']
})
export class DeleteUserButtonComponent implements OnInit {

  @Input()
  user: User | undefined;

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
  }

  delete(): void {
    //this.user = this.user.filter(h => h !== user);
    this.userService.deleteUser(this.user).subscribe();
  }

}
