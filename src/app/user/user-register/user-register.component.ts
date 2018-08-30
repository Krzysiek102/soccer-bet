import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'soccer-bet-register',
  templateUrl: './user-register.component.html',
  providers: [UserService],
})
export class UserRegisterComponent {
  user: User = new User();

  constructor(private userService: UserService) {
  }

  create() {
    this.userService.create(this.user)
      .subscribe(registeredUser => console.log('registered successfully'));
  }
}
