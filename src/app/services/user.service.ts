

import { FormData,personalInfo,addressInfo } from './../modal/user-modal';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()

export class  UserService
 {
private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isAddressFormValid: boolean = false;


    getPersonal(): personalInfo {
        // Return the Personal data
        var personal: personalInfo = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
             age:this.formData.age,
             gender:this.formData.gender
        };
        return personal;
    }

    setPersonal(data: personalInfo) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.age= data.age;
        this.formData.gender=data.gender;
    }


    getAddress() : addressInfo {
        // Return the Address data
        var address: addressInfo = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zipcode: this.formData.zipcode
        };
        return address;
    }

    setAddress(data: addressInfo) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zipcode = data.zipcode;
    }

    getFormData(): FormData {

        return this.formData;
    }

    resetFormData(): FormData {
        this.formData.clear();
        this.isPersonalFormValid =  this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        return this.isPersonalFormValid &&
                this.isAddressFormValid;
    }


  constructor() { }



}
