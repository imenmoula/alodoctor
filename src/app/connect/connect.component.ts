import { Component } from '@angular/core';
import { compte } from '../model/compte.modele';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  user:compte = new compte();


}
