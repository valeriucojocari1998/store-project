import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './modules/about.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './modules/products.module';
import { CartModule } from './modules/cart.module';
import { CheckoutModule } from './modules/checkout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    AboutModule,
    FormsModule,
    ProductsModule,
    CartModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
