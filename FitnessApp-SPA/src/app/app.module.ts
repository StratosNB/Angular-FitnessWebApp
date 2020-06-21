import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './Home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule 
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
