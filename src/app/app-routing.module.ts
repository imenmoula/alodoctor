import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ConnectComponent } from './connect/connect.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:"patients",component:PatientsComponent},
{path: "add_patient",component:AddPatientComponent},
{path: '', pathMatch: 'full', redirectTo: 'patients'},
{path: "UpdatePatient/:num", component :UpdatePatientComponent},
{path:"search-patient",component:SearchPatientComponent},
{path:"connect",component:ConnectComponent},
{path:'',pathMatch:'full',redirectTo:''},
{ path: 'dashboard', component:DashbordComponent }, 
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
{ path: '**', redirectTo: '/dashboard', pathMatch: 'full' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
