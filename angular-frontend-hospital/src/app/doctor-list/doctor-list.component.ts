import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from '../doctor';
import { HospitalService } from '../hospital.service';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  //  Doctors: string[] = [];
  doctors: Doctor[] = [];

  // @Output() emitData = new EventEmitter<Doctor[]>();







  constructor(private doctorService: HospitalService) { }

  ngOnInit(): void {
    this.getDoctor();
  }
  // getDoctor() {
  //   // this.doctorService.getDoctorList().subscribe(data=>{this.Doctors=data;});


  // }

  getDoctor() {
    this.doctorService.getDoctorList().subscribe(data => {
      this.doctors = data;
      // this.emitData.emit(data);
    });

  }



}
