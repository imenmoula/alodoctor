import { Component } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  list_pat:patient[];

  nomPat:string='';
  constructor(private patientserv:PatientService) {
    this.list_pat = patientserv.listPatients()
    }

    chercherParNom (name : string){
      this.list_pat = this.patientserv.listPatients()
      this.list_pat = this.list_pat.filter(p=> p.nom==name)
      }
}

