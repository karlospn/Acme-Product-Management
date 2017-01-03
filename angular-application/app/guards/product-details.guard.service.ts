import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';


@Injectable()
export class ProductDetailsGuard implements CanActivate {

    constructor(private router: Router){}

    public canActivate(route: ActivatedRouteSnapshot): boolean {

        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            this.router.navigate(['/error']);
            return false;
        }
        return true;
    }
}