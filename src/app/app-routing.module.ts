import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ConnectComponent } from './connect/connect.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { patientGuard } from './guard/patients.guard'; 
import { ConnectHttpComponent } from './connect-http/connect-http.component';


const routes: Routes = [
  {path:"patients",component:PatientsComponent},
{path:"add-patient",component:AddPatientComponent, canActivate : [patientGuard] },
{path: '', pathMatch: 'full', redirectTo: 'patients'},
{path: "UpdatePatient/:num", component :UpdatePatientComponent},
{path:"search-patient",component:SearchPatientComponent},
//{path:"connect",component:ConnectComponent},
{ path: 'dashboard', component:DashbordComponent }, 
{ path: '**', redirectTo: '/connect', pathMatch: 'full' },
{path:"forbidden",component:ForbiddenComponent},
{path:"connect", component:ConnectHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
