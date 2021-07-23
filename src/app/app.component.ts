import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IncomeTaxResponse } from './incomeTaxResponse';
import { IncometaxService } from './incometax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incomeTaxFrontEnd';
  public serviceResponse!: IncomeTaxResponse;
  url = 'http://localhost:8080/calculateIncomeTax'

  constructor(private taxService: IncometaxService) { }


  onSubmit(data: any) {
    console.log(data)
    this.taxService.calculateIncomeTax(data).subscribe(
      (response: IncomeTaxResponse) => {
        this.serviceResponse = response;
        console.log(this.serviceResponse)
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }
}
