import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public create(user: User): Observable<User> {
    return this.httpClient.post<User>('/api/users', user);
  }
}
