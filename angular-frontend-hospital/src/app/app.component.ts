import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend-hospital';
  doctorData: any;
  sendData(event: any) {
    this.doctorData = event;
    console.log(event);
  }

}
