import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ConnectComponent } from './connect/connect.component';
import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PatientsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    SearchPatientComponent,
    ConnectComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
