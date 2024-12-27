import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DealsComponent } from './deals/deals.component';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductManagerComponent,
    ProductDetailsComponent,
    ProductComponent,
    DealsComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    ProductManagerComponent
  ]
})
export class ProductModule { }
