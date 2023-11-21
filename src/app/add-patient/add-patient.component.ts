import { Component } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  newpat:patient=new patient();
constructor(private patientService : PatientService) { }
 ajouterEtudiant() {
 this.patientService.addPatients(this.newpat);
 }

}
