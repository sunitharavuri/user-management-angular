
import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { addressInfo } from '../modal/user-modal';
import { UserService } from '../services/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
 address: addressInfo;
    form: any;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
      this.address=this.userService.getAddress();
        //console.log('address is loaded');
    }

    save(form: any) {
        if (!form.valid)
            return;

        this.userService.setAddress(this.address);

}
}
