import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Match } from './match';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchService {
  private readonly _url = '/api/matches';

  constructor(private httpClient: HttpClient) { }

  public create(match: Match): Observable<Match> {
    return this.httpClient.post<Match>(this._url, match);
  }

  public delete(match: Match): Observable<Match> {
    return this.httpClient.delete<Match>(`${this._url}/${match._id}`);
  }

  public get(id: string): Observable<Match> {
    return this.httpClient.get<Match>(`${this._url}/${id}`);
  }

  public list(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this._url);
  }

  public update(match: Match): Observable<Match> {
    return this.httpClient.put<Match>(`${this._url}/${match._id}`, match);
  }

}
