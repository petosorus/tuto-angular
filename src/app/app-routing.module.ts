import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Beer1Component } from './beer1/beer1.component';
import { Beer3Component } from './beer3/beer3.component';
import { Beer2Component } from './beer2/beer2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '1',
    component: Beer1Component
  },
  {
    path: '2',
    component: Beer2Component
  },
  {
    path: '3',
    component: Beer3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
