import { Injectable, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { Groupe } from '../model/groupe.model';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  tab_pat: patient[];
  tab_grp: Groupe[];
  constructor() {
    this.tab_pat = [
      {
        cin: 111,
        nom: "charrada",
        prenom: "alya",
        dateNaiss: new Date("01/01/1972"),
        tel: 23114329,
        adresse: "nahj sidi ben issa ",
        sexe: "femme",
        assurance: "CNAM",
        grp: {
          idGrp: 1, nomGrp: "Patients Dentaires",
          parcours: "Orthodontie"
        }
      },
      //2me patient
      {
        cin: 222,
        nom: "moula",
        prenom: "ichraf",
        dateNaiss: new
          Date("12/01/1994"),
        tel: 8889987,
        adresse: "afh2",
        sexe: "femme",
        assurance: "CNAM",
        grp: {
          idGrp: 2, nomGrp: "Traitement orthodontique",
          parcours: "Traitement orthodontique"
        }
      },

      //3eme patient 
      {
        cin: 333,
        nom: "moula",
        prenom: "nour el houda",
        dateNaiss: new Date("04/02/1995"),
        tel: 33366655,
        adresse: "france ",
        sexe: "femme",
        assurance: "CNAM",
        grp: {
          idGrp: 3, nomGrp: "Patients Soins Dentaires",
          parcours: "Soins dentaires de routine"
        }
      },
      //4eme patient
      {
        cin: 444,
        nom: "charrada",
        prenom: "ghalia",
        dateNaiss: new Date("04/12/2021"),
        tel: 11222336,
        adresse: "dar chabenne",
        sexe: "femme",
        assurance: "CNAM",
        grp: {
          idGrp: 4, nomGrp: "Patients Chirurgie Buccale",
          parcours: "Chirurgie buccale avancée"
        }
      }
    ]
    //table group
    this.tab_grp = [
      { idGrp: 1, nomGrp: "Patients Chirurgie Buccale", parcours: "Chirurgie buccale avancée" },
      { idGrp: 2, nomGrp: "Traitement orthodontique", parcours: "raitement orthodontique" },
      { idGrp: 3, nomGrp: "Patients Soins Dentaires", parcours: "Soins dentaires de routine" },
      { idGrp: 4, nomGrp: "Patients Chirurgie Buccale", parcours: "Chirurgie buccale avancée" },
      { idGrp: 5, nomGrp: "SEM21", parcours: "Systèmes Embarqués et Mobiles" }
    ]
  }

  listeGroupe() {
    return this.tab_grp;
  }

  viewGroupe(num: number) : Groupe{
    return this.tab_grp.find(g => g.idGrp == num )!
  }

  listPatients(): patient[] {
    return this.tab_pat;
  }

  addPatients(p: patient) {
    {
      this.tab_pat.push(p);
      console.log("add confirm et avec succe " + p.nom);
    }
  }
  delPatient(p: patient) {
    let pos = this.tab_pat.indexOf(p);
    if (pos != -1) {
      this.tab_pat.splice(pos, 1);
      console.log("suppression avec succe :" + p.nom);
    }

  }


  viewPatient(num: number): patient {
    return this.tab_pat.find(p => p.cin == num)!
  }

  editPatient(patient: patient): void {
    this.addPatients(patient);
    this.delPatient(patient);

  }
  
getNbPatients():number{
  return this.tab_pat.length;
}
getNbGroups(): number{
  return this.tab_grp.length;
}
getAvgMoyennes():number{
  let sum=0;
  this.tab_pat.forEach(patient=>{
    sum+= patient.grp.idGrp;
  });
  return sum/this.getNbPatients();
}

}
 
