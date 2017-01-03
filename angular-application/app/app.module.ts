import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from "./pipes/product-filter";
import { StarFilterPipe } from "./pipes/star-filter";
import { StarComponent } from "./shared/star.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailsComponent } from "./products/product.details.component";
import { SorryPageComponent } from "./sorry/sorry-page.component";
import { ProductDetailsGuard } from "./guards/product-details.guard.service";

var routes: Route[] = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductDetailsGuard] , component: ProductDetailsComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'error', component: SorryPageComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: SorryPageComponent}];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarFilterPipe,
        StarComponent,
        WelcomeComponent,
        ProductDetailsComponent,
        SorryPageComponent    
    ],
    providers: [ProductDetailsGuard],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
