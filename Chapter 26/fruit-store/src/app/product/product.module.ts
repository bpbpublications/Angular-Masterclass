import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { DealsComponent } from './components/deals/deals.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProductManagerComponent,
    ProductDetailsComponent,
    ProductComponent,
    DealsComponent,
    OrdersComponent,
    ProductCardComponent,
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
