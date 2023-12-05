import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from '../model/compte.modele';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCourant: string = '';
  roleCourant: string = '';
  isConnected: boolean = false;

  constructor(private router: Router) { }
  users: compte[] = [
    {
      email: "admin@gmail.com",
      mot2pass: 'azerty',
      nom: "Administrateur",
      role: 'ADMIN',
      tel: '222222222',
      adresse: 'nahj sidi ben issa',
    },
    {
      email: "imenmoula@gmail.com",
      mot2pass:'2002',
      nom: 'imenmoula',
      role: 'AGENT',
      tel: '212121212',
      adresse: 'nahj sidi ben issa',
    }

  ];
  

 
  connect(user: compte): boolean {
    let connected = false;
    this.users.forEach((unUser) => {
      if (unUser.email === user.email && unUser.mot2pass === user.mot2pass) { //vérifier email et mot de passe
        this.isConnected = true;
        this.userCourant = unUser.nom;
        this.roleCourant = unUser.role;
        connected =true;
        console.log("Connexion de ", unUser.nom, " - role :", unUser.role)
        localStorage.setItem('userCourant', unUser.nom);// stocker userCourant dans localStorage
        localStorage.setItem('isConnected', 'true'); // stocker isConnected dans localStorage
      }
    });
    return connected;
  }
  disconnect() {
    this.isConnected = false;
    this.userCourant = '';
    this.roleCourant = '';
    this.router.navigate(['/connect']);// naviguer vers la page de connexion
    localStorage.removeItem('userCourant');// supprimer userCourant de localStorage
    localStorage.removeItem('isConnected'); // supprimer isConnected de localStorage
  }
  testerAdmin(): boolean {
    return this.roleCourant === 'ADMIN';
  }
  calculNbUsers() {
    return this.users.length;// retourne la taille du tableau users
  }

}