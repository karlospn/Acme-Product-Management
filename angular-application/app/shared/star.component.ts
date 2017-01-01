import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-stars",
    templateUrl: "app/shared/star.component.html",
    styleUrls: ["app/shared/star.component.css"],
})

export class StarComponent implements  OnChanges {
   
    @Input() public rating: number;
    @Output() public ratingClicked: EventEmitter<number> = new EventEmitter<number>();
    private starWidth: number; 

    public ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    private onClick(): void {
        this.ratingClicked.emit(this.rating);
    }

}
