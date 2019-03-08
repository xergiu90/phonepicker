import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonepickerService {
    public data= new BehaviorSubject(null);

  constructor(private http: HttpClient) { }


  getCountryData(){
      this.http.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes').subscribe(data => {
          this.data.next(data);
      });
  }

}
