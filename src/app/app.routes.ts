import { Routes } from '@angular/router';

import { Fade } from './fade/fade';
import { Search } from './search/search';

export const path = {
    fade: '/fade',
    search: '/search',
    player: '/player',
    reader: '/reader'
};

export const routes: Routes = [
    { path: 'fade', component: Fade, title: 'HASD | Cargando...' },
    { path: 'search', component: Search, title: 'HASD | Buscar' },
    { path: 'player/:numeral', loadComponent: () => import('./player/player').then(m => m.Player) },
    { path: 'reader/:numeral', loadComponent: () => import('./reader/reader').then(m => m.Reader) },
    { path: '', redirectTo: 'fade', pathMatch: 'full' },
    { path: '**', redirectTo: 'fade' }
];
