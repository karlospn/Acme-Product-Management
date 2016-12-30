import { Component } from "@angular/core";

@
Component({
    selector: "pm-app",
    template: "<h1>{{pageTitle}}</h1>"
})

export class AppComponent {
    private pageTitle : string = "Acme Product Management";
    
}