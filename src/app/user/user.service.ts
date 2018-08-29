import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  private readonly url = '/api/users';

  constructor(private httpClient: HttpClient) { }

  public create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  public list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  public get(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }
}
