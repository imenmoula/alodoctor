import { Injectable } from '@angular/core';
import { patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  tab_pat: patient[];
  constructor() {
 this.tab_pat = [
  {
  nom:"charrada",
  prenom:"alya", 
  dateNaiss:new Date("01/01/1972"),
  tel:23114329,
  adresse:"nahj sidi ben issa ",
  sexe:"femme",
  assurance:"CNAM"},

  {
   nom:"moula",
  prenom:"ichraf", 
  dateNaiss:new
  Date("12/01/1994"),
  tel:8889987,
  adresse:"afh2",
  sexe:"femme",
  assurance:"CNAM"
},

  {
  nom:"moula",
  prenom:"nour el houda", 
  dateNaiss:new Date("04/02/1995"),
  tel:33366655,
  adresse:"france ",
  sexe:"femme",
  assurance:"CNAM"
},

{
  nom:"charrada",
  prenom:"ghalia", 
  dateNaiss:new Date("04/12/2021"),
  tel:11222336,
  adresse:"dar chabenne",
  sexe:"femme",
  assurance:"CNAM"
}
];
  }

listPatients():patient[]{
  return this.tab_pat;
}
addPatients(p:patient)
{
  this.tab_pat.push(p);
  console.log("add confirm et avec succe ");
}
 
 ngOnInit():void{}
 }

