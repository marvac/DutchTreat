import { Component } from "@angular/core";
import { DataService } from "../shared/data-service";

@Component({
    selector: 'the-cart',
    templateUrl: 'cart.component.html',
    styleUrls: []

})
export class CartComponent {
    constructor(private dataService: DataService) {

    }

}