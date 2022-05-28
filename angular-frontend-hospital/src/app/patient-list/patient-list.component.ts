import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[]=[];
  constructor(private doctorService:HospitalService,private route:Router) { }

  ngOnInit(): void {
    this.getPatient();
  }
  getPatient() {
    this.doctorService.getPatientList().subscribe ( data => {this.patients = data;});
  }
      GoBack()
      {
            this.route.navigate(['/create-patient']);
      }
}
