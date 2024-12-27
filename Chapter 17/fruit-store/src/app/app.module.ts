import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HasRoleDirective } from './auth/direcives/directive/has-role.directive';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';
import { GlobalErrorHandler } from './shared/error-handler/GlobalErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HasRoleDirective,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
