import { Routes } from '@angular/router';
import { ProductComponent } from './page/product/product.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    pathMatch: 'full',
  },
];
