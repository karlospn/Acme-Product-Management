import { Component, OnInit } from "@angular/core";
import { IProduct, Product } from "./product";
import { ProductService } from "../services/products.service";

@Component({
    templateUrl: "product-add.template.html",
    moduleId: module.id
})

export class ProductInsertComponent {
    private product: IProduct;
    private errorMessage: string;
    private successMessage: string;

    private displayDate = new Date();
    private myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd-mm-yyyy',
        firstDayOfWeek: 'mo',
        disableUntil: { year: this.displayDate.getFullYear(), month: this.displayDate.getMonth() + 1, day: this.displayDate.getDay() }
    };

    constructor(private service : ProductService) {
        this.product = new Product();
    }

    private onDateChanged(event: any) {
        if (event.formatted === "") {
            this.product.releaseDate = `${this.displayDate.getDay()}-${this.displayDate.getMonth()}${1}-${this.displayDate.getFullYear()}`;
        }
        this.product.releaseDate = event.formatted;
    }

    private onSubmit() {
        var valid: boolean = this.validateFormModel();
        if (!valid) {
            this.errorMessage = "There is an error in the form";
             return false;
        }
        this.errorMessage = "";
        this.service.postProduct(this.product).subscribe(
            (value: any) => {
                console.log("data: " + value);
                this.successMessage = "Data posted successful. Item added on BBDD with ID: "+ value.id;
            },
            (error: any) => {
                console.log("error: " + error);
                this.errorMessage = "There is an error sending the data to the server: " + error._body;
            }
        );
    }


    private validateFormModel(): boolean {
        return true;
    }

}