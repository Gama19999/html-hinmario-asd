import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { PlayerComponent } from './player/player.component';
import { FadeComponent } from './player/fade/fade.component';

const routes: Routes = [
  { path: 'fade', component: FadeComponent, title: 'HA7D | Loading' },
  { path: 'start', component: StartComponent, title: 'HA7D | Inicio' },
  { path: 'player/:mode/:num', component: PlayerComponent },
  { path: '', redirectTo: 'fade', pathMatch: 'full' },
  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
