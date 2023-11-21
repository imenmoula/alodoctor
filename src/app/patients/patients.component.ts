import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  tab_pat: patient[];
  constructor(private patientServ : PatientService) {
    this.tab_pat =this.patientServ.listPatients();
    }


ngOnInit():void{}
}
