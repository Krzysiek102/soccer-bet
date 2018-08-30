import { Component } from '@angular/core';
import { SessionService } from '../session.service';
import { User } from '../user';

@Component({
  selector: 'soccer-bet-user-login',
  templateUrl: './user-login.component.html',
  providers: [SessionService],
})
export class UserLoginComponent {
  user: User = new User();

  constructor(private sessionService: SessionService) {
  }

  login() {
    this.sessionService.create(this.user)
    .subscribe(session => {
      this.sessionService.storeLocally(session);
      console.log('logged successfully');
    });
  }
}
