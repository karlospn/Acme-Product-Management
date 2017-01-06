import { Component, OnInit } from "@angular/core";
import { IProduct, Product } from "./product";

@Component({
    templateUrl: "product-add.template.html",
    moduleId: module.id
})

export class ProductInsertComponent {
    private product: IProduct;

    constructor() {
        this.product = new Product();
    }

}