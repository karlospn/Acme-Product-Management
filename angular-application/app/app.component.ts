import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

@Component({
    selector: "pm-app",
    templateUrl: "app-component.html",
    moduleId: module.id,
    providers: [RouterModule]
})

export class AppComponent {
    private pageTitle : string = "Acme Product Management";
    
}