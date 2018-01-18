import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'soccer-bet-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent {
  @Input() match: Match;
  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private matchService: MatchService) { }

  createMatch(matchToCreate: Match) {
    this.matchService.create(matchToCreate).subscribe(addedMatch => this.createHandler(addedMatch));
  }

  updateMatch(matchToUpdate: Match) {
    this.matchService.update(matchToUpdate).subscribe(updatedMatch => this.updateHandler(updatedMatch));
  }

  deleteMatch(matchId: string) {
    this.matchService.delete(matchId).subscribe(deletedMatchId => this.deleteHandler(deletedMatchId));
  }

}
