import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(public userService: UserService) {
   this.userService.loadUsers();
  }
}
