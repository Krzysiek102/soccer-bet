import { Component, Input, Output } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { EventEmitter } from '@angular/core/';

@Component({
  selector: 'soccer-bet-match-details',
  templateUrl: './match-details.component.html',
  providers: [MatchService]
})
export class MatchDetailsComponent {
  @Input() match: Match;
  @Output() created = new EventEmitter<Match>();
  @Output() updated = new EventEmitter<Match>();
  @Output() deleted = new EventEmitter<string>();

  constructor(private matchService: MatchService) { }

  createMatch(matchToCreate: Match) {
    this.matchService.create(matchToCreate).subscribe(addedMatch => this.created.emit(addedMatch));
  }

  updateMatch(matchToUpdate: Match) {
    this.matchService.update(matchToUpdate).subscribe(updatedMatch => this.updated.emit(updatedMatch));
  }

  deleteMatch(matchId: string) {
    this.matchService.delete(matchId).subscribe(deletedMatchId => this.deleted.emit(deletedMatchId));
  }

}
