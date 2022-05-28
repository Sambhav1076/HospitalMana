import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { HospitalService } from '../hospital.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient: Patient = new Patient();
  
 

  constructor(private doctorService: HospitalService,private router:Router) { }
  // @Input() doctors: Doctor[] = [];
  doctors:Doctor[]=[];
  ngOnInit(): void {
    this.getDoctor();
  }


  getDoctor() {
    this.doctorService.getDoctorList().subscribe(data => { this.doctors = data; });
    console.log(this.doctors);
  }

  onSubmit() {
    console.log(this.patient);
      alert("Patient Got Registered");
    this.savePatient();
    this.router.navigate(['/patientList']);
    
  }
  savePatient() {
    this.doctorService.createPatient(this.patient).subscribe(data => { console.log(data); }, (error: any) => console.log(error));
  }

}
