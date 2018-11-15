import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators"

@Injectable()
export class DataService {
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
        }]

    constructor(private http: HttpClient) {

    }

    loadProducts() {
        return this.http.get("/api/products").pipe(map((data: any[]) => {
            this.products = data
            return true
        }))
    }
}