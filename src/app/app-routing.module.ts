import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'start', component: StartComponent, title: 'HA7D | Inicio' },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
