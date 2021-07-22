import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incomeTaxFrontEnd';

  constructor(private http:HttpClient){}

  onSubmit(data: any){

    console.warn(data)


    this.http.post('http://localhost:8080/calculateIncomeTax', data)
    .subscribe((result)=>{console.warn("result",result)})
  }
}
