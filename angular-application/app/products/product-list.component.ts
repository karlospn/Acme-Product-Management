import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService }  from "../services/products.service";

@Component({
    selector: "pm-products",
    templateUrl: "app/products/product-list.template.html",
    styleUrls: ["app/products/product-list.component.css"]
})

export class ProductListComponent implements OnInit {
    
    private tableTitle: string = "Product List";
    private imageWidth: number = 50;
    private imageMargin: number = 2;
    private showImage: boolean = false;
    private listFilter : string = "Cart";
    private products: IProduct[];
    private errorMessage : string;

    constructor(private productService: ProductService) {  }

    private toggleImage(): void {
        if (this.showImage) {
            this.showImage = false;
        } else {
            this.showImage = true;    
        }
     
    }

    public ngOnInit(): void {
        this.productService.getProducts().
            subscribe((value: IProduct[]) => {
                    this.products = value
                },
            error => {
                this.errorMessage = "Error retrieving data"
            });
    }


    private onRatingClicked(message: number) : void {
        this.tableTitle = "You clicked in the "+ message+" rating";
    }

    private consumePromise(): void {
        this.productService.getProductsWithPromise().then((value: IProduct[]) => {
            this.products = value;
        },
            error => {
                console.log(JSON.stringify(error));
            });
    }
        
}