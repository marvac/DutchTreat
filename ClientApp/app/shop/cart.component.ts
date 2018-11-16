import { Component } from "@angular/core";
import { DataService } from "../shared/data-service";
import { Router } from "@angular/router";

@Component({
    selector: 'the-cart',
    templateUrl: 'cart.component.html',
    styleUrls: []

})
export class CartComponent {
    constructor(private dataService: DataService, private router: Router) {

    }

    onCheckout() {
        if (this.dataService.loginRequired) {
            this.router.navigate(["login"])
        }
        else {
            this.router.navigate(["checkout"])
        }
    }
}