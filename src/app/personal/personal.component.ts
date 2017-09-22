
import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { personalInfo } from '../modal/user-modal';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
   personal: personalInfo;
    form: any;
  constructor( private usersService:UserService) { }



    ngOnInit() {
        this.personal = this.usersService.getPersonal();
        //console.log('Personal feature loaded!');
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.usersService.setPersonal(this.personal);
    }
  }


