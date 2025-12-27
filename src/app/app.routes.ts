import { Routes } from '@angular/router';

import { Fade } from './fade/fade';
import { Lobby } from './lobby/lobby';

export const routes: Routes = [
    { path: 'fade', component: Fade, title: 'HASD | Cargando...' },
    { path: 'lobby', component: Lobby, title: 'HASD | Buscar' },
    { path: 'player', loadComponent: () => import('./player/player').then(m => m.Player), title: 'HASD | {}' },
    { path: '', redirectTo: 'fade', pathMatch: 'full' },
    { path: '**', redirectTo: 'lobby' }
];
