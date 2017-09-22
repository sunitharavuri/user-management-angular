import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormData } from '../modal/user-modal';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  @Input() formData: FormData;
    isFormValid: boolean = false;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.formData = this.userService.getFormData();
        this.isFormValid = this.userService.isFormValid();
        //console.log('Result  loaded!');
    }

    submit() {
        alert('submitted..!');
        this.formData = this.userService.resetFormData();
        this.isFormValid = false;
    }
}
