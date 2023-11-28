import { Component , OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Groupe } from '../model/groupe.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent {
  newGrp = new Groupe;
  groups= this.patientService.listeGroupe();;
  newCin: number = 0;
  newpat: patient = new patient();



constructor(private patientService : PatientService ,private router: Router ,private route: ActivatedRoute) { }


ajouterPatient() {
  console.log('this.newCin:', this.newCin); // Check if this.newCin has a valid value
 
  this.newGrp = this.patientService.viewGroupe(this.newCin);
  console.log('this.newGrp:', this.newGrp); // Check the value of this.newGrp

  this.newpat.grp = this.newGrp;
  this.patientService.addPatients(this.newpat);
  this.router.navigate(['patient']);
 }
 

}
