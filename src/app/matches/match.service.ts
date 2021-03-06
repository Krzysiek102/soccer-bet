import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Match } from './match';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchService {
  private readonly url = '/api/matches';

  constructor(private httpClient: HttpClient) { }

  public create(match: Match): Observable<Match> {
    return this.httpClient.post<Match>(this.url, match);
  }

  public delete(matchId: string): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${matchId}`);
  }

  public get(id: string): Observable<Match> {
    return this.httpClient.get<Match>(`${this.url}/${id}`);
  }

  public list(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.url);
  }

  public update(match: Match): Observable<Match> {
    return this.httpClient.put<Match>(`${this.url}/${match._id}`, match);
  }

}
