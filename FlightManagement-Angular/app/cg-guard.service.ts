import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class CgGuardService implements CanActivate {

  constructor(private router:Router, private flightSer:FlightService) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | 
  import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    console.log("guard");
    let token = localStorage.getItem("token");
    if(localStorage.getItem("token") != null){
      
      let arr = token.split("-");
      let userName = this.flightSer.decrypt(arr[1]);
      
      let role = this.flightSer.decrypt(arr[2]);
      console.log(route.data);
      if(route.data.role==undefined)return true;
      if(route.data.role!=undefined && role!=null && route.data.role==role.trim()){
        return true;
      }
    }
    this.router.navigateByUrl("/error");
    return false;
  }
}