import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
const routes: Routes = [
  {path:"patients",component:PatientsComponent},
{path: "add_patient",component:AddPatientComponent},
{path: '', pathMatch: 'full', redirectTo: 'patients'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
