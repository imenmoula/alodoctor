import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  nbPat:number=0;
  nbGrp:number=0;
  avgMoy:number=0;
  nbUsers:number=0;
  
  constructor(private patientServ : PatientService,private AuthServ:AuthService) { 
    this.nbPat =this.patientServ.getNbPatients();
    this.avgMoy = this.patientServ.getAvgMoyennes();
    this.nbGrp=this.patientServ.getNbGroups();
    this.nbUsers=this.AuthServ.calculNbUsers();

    }

}
