import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn  : 'root'
})
export class patientsGuard implements CanActivate {
  constructor (private authServ: AuthService, private rout : Router) 
  {}
  
   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
   if (this.authServ.testerAdmin()) // on teste si l’utilisateur est admin
   return true;// on retourne vrai
   else {
    this.rout.navigate(['/forbidden'])// on navigue vers l’url forbidden
    return false; // on retourne faux
   }
  
   }
  }
