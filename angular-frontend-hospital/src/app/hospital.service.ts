import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private baseURL = 'http://localhost:5000/api/v1/doctors';

  private baseURLS = 'http://localhost:5000/api/v1/patient';

  private baseURLSS = 'http://localhost:5000/api/v1/getCount';

  constructor(private httpClient: HttpClient) {}

  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURLS}`);
  }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURLS}`, patient);
  }
  getCountPatient():Observable<Object> {
    return this.httpClient.get(this.baseURLSS);
  }
}
