import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "../products/product";

@Pipe({
    name: 'starFilter'
})

export class StarFilterPipe implements PipeTransform {
    transform(value: number): number {
        return Math.round(value * 100);

    }
}
