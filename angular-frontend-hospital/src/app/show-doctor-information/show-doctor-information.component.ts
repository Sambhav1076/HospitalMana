import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { HospitalService } from '../hospital.service';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-show-doctor-information',
  templateUrl: './show-doctor-information.component.html',
  styleUrls: ['./show-doctor-information.component.css']
})
export class ShowDoctorInformationComponent implements OnInit {
  doctors: Doctor[] = [];
  mydoctor: Doctor[] = [];

  constructor(private doctorService: HospitalService, private route:Router) { }

  ngOnInit(): void {
    this.getDoctor();
  }
  getDoctor() {
    this.doctorService.getDoctorList().subscribe(data => { this.doctors = data });

  }
  getDetails(id:number) {

    this.route.navigate(['/findParticularDoctor',id])
  }


}
