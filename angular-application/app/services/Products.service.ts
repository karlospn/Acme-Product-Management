import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { IProduct } from "../products/product";



@Injectable()
export class ProductService 
{
    constructor(private http: Http) { }

    public getProducts(): Observable<IProduct[]> {

        return this.http.get("api/products/products.json")
            .map((response: Response) => <IProduct[]>response.json())
           .do(data => console.log(JSON.stringify(data)))
           .catch(this.handleError);
    }


    private handleError(error: Response) : Observable<IProduct[]> {
        console.log("Error accesing data" + JSON.stringify(error));
        return Observable.throw(error || 'server error');
    }


    public getProductsWithPromise(): Promise<IProduct[]> {

        return this.http.get("api/products/products.json").toPromise()
            .then((response: Response) => <IProduct[]>response.json())
            .catch(this.handleErrorPromise);
    }

    private handleErrorPromise(reason: any): Promise<any> {
        return Promise.reject(reason.message);
    }
}