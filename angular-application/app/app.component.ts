import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ProductService } from "./services/products.service";

@Component({
    selector: "pm-app",
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li >
                    <li><a [routerLink]="['/products']">Products list</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
    `,
    providers: [ProductService, RouterModule]
})

export class AppComponent {
    private pageTitle : string = "Acme Product Management";
    
}