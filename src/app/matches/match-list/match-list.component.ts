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
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.list().subscribe(data => this.matches = data, err => console.log(err));
  }

}
