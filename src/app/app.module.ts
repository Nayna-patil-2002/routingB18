import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { UserComponent } from './shared/component/user/user.component';
import { ProductComponent } from './shared/component/product/product.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UserdetailsComponent } from './shared/component/userdetails/userdetails.component';
import { UserformComponent } from './shared/component/userform/userform.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetconfirmComponent } from './shared/component/getconfirm/getconfirm.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { FairsDsahboardComponent } from './shared/component/fairs-dsahboard/fairs-dsahboard.component';
import { FairCardComponent } from './shared/component/fair-card/fair-card.component';
import { ProductdashboardComponent } from './shared/component/productdashboard/productdashboard.component';
import { ProductformComponent } from './shared/component/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    FairsComponent,
    UserdetailsComponent,
    UserformComponent,
    NavbarComponent,
    GetconfirmComponent,
    FairsDsahboardComponent,
    FairCardComponent,
    ProductdashboardComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
