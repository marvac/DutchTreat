import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data-service";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
    products

    constructor(private dataService: DataService) {
        this.products = dataService.products
    }

    ngOnInit() {
        this.dataService.loadProducts().subscribe(success => {
            if (success) {
                this.products = this.dataService.products
            }
        })
    }
}