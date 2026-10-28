import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar/buscar.page').then( m => m.BuscarPage)
  },
  {
    path: 'crear',
    loadComponent: () => import('./crear/crear.page').then( m => m.CrearPage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
];
