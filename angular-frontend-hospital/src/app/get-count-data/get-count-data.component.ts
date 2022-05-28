import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-get-count-data',
  templateUrl: './get-count-data.component.html',
  styleUrls: ['./get-count-data.component.css'],
})
export class GetCountDataComponent implements OnInit {
  constructor(private doctorService: HospitalService) {}

  ngOnInit(): void {
    this.getCount();
  }
  getCount() {
    this.doctorService.getCountPatient().subscribe((data) => {
      const values = Object.values(data)
      const patientCountMap = new Map()

      values.forEach(docDetail => {
        const docArray = docDetail.split(',')
        patientCountMap.set(docArray[0],docArray[1])
      });
      console.log(patientCountMap);
      
      console.log(patientCountMap.get('Dr. Rahul Goti'));
      
      
    });
  }
}
