import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './product/pages/home-page/home-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product/product.component';
import { DealsComponent } from './product/deals/deals.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersComponent } from './product/components/orders/orders.component';
import { AuthGuard } from './shared/routes-guards/AuthGuard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'products', component: ProductComponent,
    children: [{ path: 'details', component: ProductDetailsComponent }]
  },
  { path: 'deals', component: DealsComponent, data: { title: 'Latest Deals and Discounts' } },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
