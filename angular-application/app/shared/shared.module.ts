import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarFilterPipe } from "../pipes/star-filter";
import { StarComponent } from "../shared/star.component";
import { ModalComponent } from "./modal.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ 
        StarFilterPipe,
        StarComponent,
        ModalComponent
    ],
    exports: [
        FormsModule,
        CommonModule,
        StarComponent,
        StarFilterPipe,
        ModalComponent
    ]
})

export class SharedModule { }
