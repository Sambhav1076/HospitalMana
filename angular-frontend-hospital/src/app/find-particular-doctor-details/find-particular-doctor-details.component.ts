import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-find-particular-doctor-details',
  templateUrl: './find-particular-doctor-details.component.html',
  styleUrls: ['./find-particular-doctor-details.component.css'],
})
export class FindParticularDoctorDetailsComponent implements OnInit,OnDestroy {
  doctors: Doctor[] = [];
  myDoc: Doctor[] = [];
  myDocId: any;
   patientCountMap = new Map()
   x!:number
  routeSubs :any
  constructor(
    private doctorService: HospitalService,
    private router: ActivatedRoute,
    private routerx:Router
  ) {}

  ngOnInit(): void {
    this.routeSubs = this.router.paramMap.subscribe((params) => {
      this.myDocId = params.get('id');
    });
    this.doctorService.getDoctorList().subscribe((data) => {
      this.doctors = data;
      console.log(data);
      console.log(this.myDocId);

      for (let i = 0; i < this.doctors.length; i++) {
        if (this.doctors[i].id.toString() === this.myDocId.toString()) {
          console.log(this.doctors[i].age + this.doctors[i].name);
          this.myDoc.push(this.doctors[i]);
        }
      }
      console.log(this.myDoc);
    });
  }
  ngOnDestroy(): void {
    this.routeSubs.unsubscribe()
  }

  GoBack()

{

  this.routerx.navigate(['/show-doctor-information']);  
}

getCount(name:string) {
  return this.doctorService.getCountPatient().subscribe((data) => {
    const values = Object.values(data)
    // const patientCountMap = new Map()

    values.forEach(docDetail => {
      const docArray = docDetail.split(',')
     this.patientCountMap.set(docArray[0],docArray[1])
    });
    // console.log(this.patientCountMap);
    
    // console.log(patientCountMap.get('Dr. Rahul Goti'));
      this.x=this.patientCountMap.get(name)
      //  console.log(this.patientCountMap.get(name));
      if(this.x==null)
      {
        return false;
      }
      else{
        return true;
      }
        
  });
}




}
