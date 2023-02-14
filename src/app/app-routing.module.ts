import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/voting', pathMatch: 'full' },
  { path: 'voting', loadChildren: () => import('./pages/voting/voting.module').then(m => m.VotingModule) },
  { path: '**', redirectTo: '/voting' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
