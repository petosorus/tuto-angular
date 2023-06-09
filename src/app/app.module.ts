import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Beer1Component } from './beer1/beer1.component';
import { Beer2Component } from './beer2/beer2.component';
import { Beer3Component } from './beer3/beer3.component';
import { HttpClientModule } from '@angular/common/http';
import { Ingredients3Component } from './beer3/ingredients3/ingredients3.component';
import { Beer4Component } from './beer4/beer4.component';
import { Ingredients4Component } from './beer4/ingredients4/ingredients4.component';
import { SelectedUppercaseComponent } from './beer4/selected-uppercase/selected-uppercase.component';
import { SelectedLimitComponent } from './beer4/selected-limit/selected-limit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Beer1Component,
    Beer2Component,
    Beer3Component,
    Ingredients3Component,
    Beer4Component,
    Ingredients4Component,
    SelectedUppercaseComponent,
    SelectedLimitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
