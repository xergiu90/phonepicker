import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';
import {PhonepickerService} from './service/phonepicker.service';
import {SelectItem} from 'primeng/api';
import {parsePhoneNumberFromString, PhoneNumber} from 'libphonenumber-js';

@Component({
  selector: 'app-phonepicker',
  templateUrl: './phonepicker.component.html',
  styleUrls: ['./phonepicker.component.scss'],
})

export class PhonepickerComponent implements OnInit,ControlValueAccessor  {
    countryCodes: SelectItem[];
    phoneNumber: PhoneNumber;
    error:boolean;
    countryCode:any= '+ 93';
    countryAbrev:any= 'AF';

    phoneForm = new FormGroup({
        selectedCountry: new FormControl(),
        inputNumber: new FormControl()
    });

    constructor(private phoneservice:PhonepickerService) {
        this.phoneservice.getCountryData();
    }

    ngOnInit() {
        this.phoneservice.data.subscribe(
          (data)=> {
              this.countryCodes=[];
                if(data) {
                    data.forEach( (obj) => {
                        let fromatedObj= {
                            label: obj.name,
                            value: { code:obj.callingCodes[0]? "+ " + obj.callingCodes[0] : obj.alpha2Code, abrev: obj.alpha2Code.toLowerCase()}
                        }
                        this.countryCodes.push(fromatedObj);
                    });
                }

          }
        );
    }

    onChange(value) {
        this.countryCode= this.phoneForm.get('selectedCountry').value? this.phoneForm.get('selectedCountry').value.code:this.countryCode;
        this.countryAbrev= this.phoneForm.get('selectedCountry').value? this.phoneForm.get('selectedCountry').value.abrev:this.countryAbrev;

        this.phoneNumber = parsePhoneNumberFromString(this.countryCode + value, this.countryAbrev.toUpperCase());
    }

    submitForm() {
        if(this.phoneNumber.isValid()) {
            this.error= false;
        } else {
            this.error= true;
        }
    }

    writeValue(value) {
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn) {  }

}
