import { Component } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  list_pat:patient[];
  list_grp!:Groupe[];
  critere ='nom';
  gripidRech !: number;
  nomPat:string='';
  constructor(private patientserv:PatientService) {
    this.list_pat = patientserv.listPatients()
    }

    chercherParNom (name : string){
      this.list_pat = this.patientserv.listPatients()
      this.list_pat = this.list_pat.filter(p=> p.nom.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
      }
      ///chercher par groupe 
      chercherParGrp() {
        this.list_pat = this.patientserv.listPatients();
        if (this.gripidRech != 0) {
          this.list_pat = this.list_pat.filter(p => p.grp.idGrp == this.gripidRech)
        }
      }

      ngOnInit(){
        this.list_grp = this.patientserv.listeGroupe()
        }
}

