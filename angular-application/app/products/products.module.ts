import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from "../pipes/product-filter";
import { ProductDetailsComponent } from "./product.details.component";
import { ProductDetailsGuard } from "../guards/product-details.guard.service";
import { ProductService } from "../services/products.service";

var routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductDetailsGuard], component: ProductDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [   
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailsComponent,
    ],
    providers: [ProductDetailsGuard, ProductService]
})

export class ProductsModule { }
