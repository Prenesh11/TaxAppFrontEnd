import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IncomeTaxResponse } from './incomeTaxResponse';

@Injectable({
  providedIn: 'root'
})
export class IncometaxService {

  private url = 'http://localhost:8080/calculateIncomeTax';

  constructor(private http: HttpClient) { }

  public calculateIncomeTax(request: any): Observable<IncomeTaxResponse> {
    return this.http.post<IncomeTaxResponse>(this.url, request);

  }
}
