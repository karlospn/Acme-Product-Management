import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarFilterPipe } from "../pipes/star-filter";
import { StarComponent } from "../shared/star.component";



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ 
        StarFilterPipe,
        StarComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent,
        StarFilterPipe
    ]
})

export class SharedModule { }
