import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from './services/user.service';
//import { UIROUTER_DIRECTIVES }from'@uirouter/angular;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  @Input() formData;
constructor( private userService:UserService){}
ngOnInit(){
this.formData = this.userService.getFormData();
}
}
