import { Injectable } from '@angular/core';
import { Session } from './session';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class SessionService {
  constructor(private httpClient: HttpClient) { }

  public create(user: User): Observable<Session> {
    return this.httpClient.post<Session>('/api/sessions', user);
  }

  public storeLocally(session: Session) {
    localStorage.setItem('token', session.token);
  }
}
