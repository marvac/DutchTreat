import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './shop/product-list.component';
import { DataService } from './shared/data-service';


@NgModule({
  declarations: [
      AppComponent,
      ProductListComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
    HttpClientModule
  ],
    providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
