import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: 'start', component: StartComponent, title: 'HA7D | Inicio' },
  { path: 'player/:mode/:num', component: PlayerComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
