import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styles: [
  ]
})
export class UpdatePatientComponent implements OnInit {
  patientCourant: patient =new patient();
  groups:Groupe[] = [];
  idgrpModified: number=0;

  constructor(private actRoute:ActivatedRoute,private router: Router , private patientServ:PatientService) { }
    modifPatient(){
      this.patientServ.viewGroupe(this.idgrpModified);
      this.patientServ.editPatient(this.patientCourant);
      console.log("Modification réussie : "+this.patientCourant.cin + '-' + this.patientCourant.nom +'-' + this.patientCourant.prenom + '-' +this.patientCourant.dateNaiss + '-' +this.patientCourant.tel +'-' +this.patientCourant.adresse+'-'+this.patientCourant.assurance);
       this.router.navigate(['patients']);
      // console.log(this.etudiantCourant);
     
    }
    ngOnInit():void  
    {
      this.groups = this.patientServ.listeGroupe();
      this.patientCourant=this.patientServ.viewPatient(this.actRoute.snapshot.params['num']);
      console.log("patient a modifier:"+this.patientCourant.cin);
      this.idgrpModified = this.patientCourant.grp.idGrp;

    }
    

   }
  

