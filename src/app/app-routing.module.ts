import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MatchListComponent } from './matches/match-list/match-list.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'matches', component: MatchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
