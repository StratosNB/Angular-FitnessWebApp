import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './Home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BmiComponent } from './bmi/bmi.component';
import { BfComponent } from './bf/bf.component';
import { BmrComponent } from './bmr/bmr.component';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      BmiComponent,
      BfComponent,
      BmrComponent
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
