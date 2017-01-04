import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { SorryPageComponent } from "./sorry/sorry-page.component";
import { ProductDetailsGuard } from "./guards/product-details.guard.service";
import { ProductsModule } from "./products/products.module"

var routes: Route[] = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'error', component: SorryPageComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: SorryPageComponent}];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        ProductsModule
    ],
    declarations: [
        AppComponent,   
        WelcomeComponent,
        SorryPageComponent    
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
