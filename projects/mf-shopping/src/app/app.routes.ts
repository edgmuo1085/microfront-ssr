import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/products/products.routes').then(r => r.authRoutes),
  },
];
