import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './shop/product-list.component'
import { DataService } from './shared/data-service'
import { CartComponent } from './shop/cart.component'

import { RouterModule } from '@angular/router'
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';

let routes = [
    { path: "", component: ShopComponent },
    { path: "checkout", component: CheckoutComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartComponent,
        ShopComponent,
        CheckoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false //can be turned on for debugging the routes
        })
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
