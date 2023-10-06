import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { CartComponent } from './components/cart/cart.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SocialBarComponent,
    FooterComponent,
    ProductsComponent,
    LogInComponent,
    ProductDetailComponent,
    AboutComponent,
    PaymentDetailsComponent,
    SignUpComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
