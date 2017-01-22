import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { MyDatePickerModule } from 'mydatepicker/dist/my-date-picker.module';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from "../pipes/product-filter";
import { ProductDetailsComponent } from "./product.details.component";
import { ProductDetailsGuard } from "../guards/product-details.guard.service";
import { ProductService } from "../services/products.service";
import { ProductInsertComponent } from "./product-add.component";
import { ProductEditComponent } from "./product-edit.component";


var routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductDetailsGuard], component: ProductDetailsComponent },
    { path: 'insert-products', component: ProductInsertComponent },
    { path: 'edit/:id', component: ProductEditComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MyDatePickerModule,
        SharedModule
    ],
    declarations: [   
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailsComponent,
        ProductInsertComponent,
        ProductEditComponent
    ],
    providers: [ProductDetailsGuard, ProductService]
})

export class ProductsModule { }
