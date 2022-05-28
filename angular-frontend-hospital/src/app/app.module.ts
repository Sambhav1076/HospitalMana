import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup } from "@angular/forms";
import { PatientListComponent } from './patient-list/patient-list.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDoctorInformationComponent } from './show-doctor-information/show-doctor-information.component';
import { FindParticularDoctorDetailsComponent } from './find-particular-doctor-details/find-particular-doctor-details.component';
import { GetCountDataComponent } from './get-count-data/get-count-data.component';
@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    CreatePatientComponent,
    PatientListComponent,
    ShowDoctorInformationComponent,
    FindParticularDoctorDetailsComponent,
    GetCountDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
