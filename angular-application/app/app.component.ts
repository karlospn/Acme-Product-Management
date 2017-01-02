import { Component } from "@angular/core";
import { ProductService } from "./services/products.service";

@Component({
    selector: "pm-app",
    template: '<div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>',
    providers: [ProductService]
})

export class AppComponent {
    private pageTitle : string = "Acme Product Management";
    
}