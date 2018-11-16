import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProductListComponent } from './shop/product-list.component'
import { DataService } from './shared/data-service'
import { CartComponent } from './shop/cart.component'

import { RouterModule } from '@angular/router'
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

let routes = [
    { path: "", component: ShopComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "login", component: LoginComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartComponent,
        ShopComponent,
        CheckoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
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
