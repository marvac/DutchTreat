import { Component } from "@angular/core";
import { DataService } from '../shared/data-service';
import { Router } from "@angular/router";

@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {

    errorMessage: string = ""

    constructor(public dataService: DataService, private router: Router) {
    }

    onCheckout() {
        this.dataService.checkout().subscribe(success => {
            if (success) {
                this.router.navigate(['/'])
            }
        }, error => this.errorMessage = "Failed to save order" )
    }
}