import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { IProduct } from "../products/product";



@Injectable()
export class ProductService 
{
    constructor(private http: Http) { }

    public getProducts(): Observable<IProduct[]> {

        var response = this.http.get("http://localhost:55696/api/products")
            .map((response: Response) => <IProduct[]>response.json())
           .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
        return response;
    }

    public getProduct(id: string): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.id === id));
    }

    public postProduct(product: IProduct): Observable<IProduct[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        var response = this.http.post("http://localhost:55696/api/products", JSON.stringify(product), options)
            .map(this.extractData)
            .catch(this.handleError);

        return response;
    }

    private handleError(error: Response): Observable<IProduct[]> {
        console.log("Error accesing / retrieving data" + JSON.stringify(error));
        return Observable.throw(error || 'server error');
    }


    private extractData(res: Response): void {
        console.log("Response : "+ res);
        let body = res.json();
        return body || {};
    }

    ///Same method as getProducts using Promises instead of Observables
    public getProductsWithPromise(): Promise<IProduct[]> {

        return this.http.get("http://localhost:55696/api/products").toPromise()
            .then((response: Response) => <IProduct[]>response.json())
            .catch(this.handleErrorPromise);
    }

    private handleErrorPromise(reason: any): Promise<any> {
        return Promise.reject(reason.message);
    }



}