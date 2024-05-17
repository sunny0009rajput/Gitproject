import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CrousalpageComponent } from './component/crousalpage/crousalpage.component';
import { CardcomponentComponent } from './component/cardcomponent/cardcomponent.component';
import { AboutcomponentComponent } from './component/aboutcomponent/aboutcomponent.component';
import { FootercomponentComponent } from './component/footercomponent/footercomponent.component';
import { PriceComponent } from './component/price/price.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrousalpageComponent,
    CardcomponentComponent,
    AboutcomponentComponent,
    FootercomponentComponent,
    PriceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
