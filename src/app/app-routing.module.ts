import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { MatchListComponent } from './matches/match-list/match-list.component';

const routes: Routes = [
  { path: 'register', component: UserRegisterComponent },
  { path: 'matches', component: MatchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
