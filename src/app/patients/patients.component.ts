import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  tab_pat: patient[];
  refuserStyle={'color':'red'};
  accepterStyle={'color':'green'};

  constructor(private patientServ : PatientService,public authServ:AuthService) {
    this.tab_pat =this.patientServ.listPatients();
    }
    suppPatient (p: patient) {
      let rep = confirm("Etes-vous sûr de vouloir supprimer cet patient?"+p.nom +" "+ p.prenom+"?");
      if (rep){
      this.patientServ.delPatient(p);
      console.log("Suppression avec succes :"+p.nom)
      }
 }

ngOnInit():void{}

}
