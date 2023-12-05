import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  userCourant: string | null = null;
  isConnected: string | null = null; 
  constructor(public authServ : AuthService) {
  this.userCourant = localStorage.getItem('userCourant');
    this.isConnected = localStorage.getItem('isConnected');
  }


 ngOnInit() {}


 disconnect(): void {
  console.log('ici');
  this.authServ.disconnect();
}
}

