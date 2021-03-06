﻿export interface IProduct {

    id: string;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

}

export class Product implements IProduct {

    public id: string;
    public productName: string;
    public productCode: string;
    public releaseDate: string;
    public description: string;
    public price: number;
    public starRating: number;
    public imageUrl: string;
}



