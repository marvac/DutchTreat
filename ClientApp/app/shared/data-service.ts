﻿import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators"
import { Product } from "./product";
import { Observable } from "rxjs";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    public products: Product[] = []
    public order: Order = new Order()

    public get loginRequired(): boolean {
        //basically if there is no token value or if it's expired already
        return this.token.length == 0 || this.tokenExpiration > new Date()
    }

    private token: string = ""
    private tokenExpiration: Date

    constructor(private http: HttpClient) {

    }

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products").pipe(map((data: any[]) => {
            this.products = data
            return true
        }))
    }

    public addToOrder(product: Product): void {
        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {

            item.quantity++;

        } else {

            item = new OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
        }
    }
}