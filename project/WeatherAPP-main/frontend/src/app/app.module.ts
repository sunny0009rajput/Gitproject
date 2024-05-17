import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCitiesWeatherComponent } from './list-cities-weather/list-cities-weather.component';
import { DegreeConverterPipe } from './pipe/degree-converter.pipe';
import { ShowWeekDayPipe } from './pipe/show-week-day.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { RequestInterceptor } from './common/request.interceptor';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListCitiesWeatherComponent,
    DegreeConverterPipe,
    ShowWeekDayPipe,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
      {
        provide:HTTP_INTERCEPTORS,
        useClass:RequestInterceptor,
        multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
