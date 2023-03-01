import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilteredCategoriesComponent } from './filtered-categories/filtered-categories.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product-list', component: ProductListComponent },
      { path: 'categories', component: CategoriesComponent },
      {path: 'categories/:name', component: FilteredCategoriesComponent},
      {path: '', redirectTo: 'categories', pathMatch: 'full'},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    CategoriesComponent,
    FilteredCategoriesComponent,
    ProductItemComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/