import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { FindParticularDoctorDetailsComponent } from './find-particular-doctor-details/find-particular-doctor-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ShowDoctorInformationComponent } from './show-doctor-information/show-doctor-information.component';

const routes: Routes = [


  {
    path: 'patientList',
    component: PatientListComponent

  },
  {
    path: 'create-patient',
    component: CreatePatientComponent
  },

  {
    path: 'show-doctor-information',
    component: ShowDoctorInformationComponent

  },
  {
    path: 'show-doctor-information/:id',
    component: FindParticularDoctorDetailsComponent

  },
 
 
  {
    path: 'doctorsList',
    component: DoctorListComponent


  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
