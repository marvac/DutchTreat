import { Component } from "@angular/core";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    public products = [{
        title: "Product A",
        price: 13.99
    },
    {
        title: "Product B",
        price: 11.99
    },
    {
        title: "Product C",
        price: 19.99
    },]
}