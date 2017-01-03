import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IProduct } from "./product";
import { ProductService } from "../services/products.service";



@Component({
    templateUrl: "product.details.template.html",
    moduleId: module.id
})

export class ProductDetailsComponent implements OnInit {

    private pageTitle: string = "Detail component";
    private product: IProduct;
    private errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

    public ngOnInit(): void {
        let id: number = +this.route.snapshot.params['id'];
        this.productService.getProduct(id).
            subscribe((value: IProduct) => {
                this.product = value
            },
            error => {
                this.errorMessage = "Error retrieving data";
            });

    }

    private onBack(): void {
        this.router.navigate(['/products']);
    }

    private onRatingClicked(message: number): void {
        this.pageTitle = "You clicked in the " + message + " rating";
    }


    
}