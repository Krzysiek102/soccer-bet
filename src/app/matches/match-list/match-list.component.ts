import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { Match } from '../match';

@Component({
  selector: 'soccer-bet-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  providers: [MatchService]
})
export class MatchListComponent implements OnInit {
  matches: Match[];
  selectedMatch: Match;

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.list().subscribe(data => this.matches = data, err => console.log(err));
  }

  selectMatch(match: Match) {
    this.selectedMatch = match;
  }

  createNewMatch() {
    this.selectMatch(new Match());
  }

  addMatch(addedMatch: Match) {
    this.matches.push(addedMatch);
    this.selectMatch(addedMatch);
  }

  deleteMatch(deletedMatchId: string) {
    this.matches = this.matches.filter(match => match._id !== deletedMatchId);
    this.selectMatch(null);
  }

  updateMatch(updatedMatch: Match) {
    const updateMatchIndex = this.matches.findIndex(match => match._id === updatedMatch._id);
    this.matches[updateMatchIndex] = updatedMatch;
    this.selectMatch(updatedMatch);
  }
}
