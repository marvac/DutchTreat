var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.products = [{
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
            },];
    }
    ProductListComponent = __decorate([
        Component({
            selector: 'product-list',
            templateUrl: './product-list.component.html'
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map