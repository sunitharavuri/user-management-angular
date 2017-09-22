import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
//import {ValidationService} from './services/validation.service';
const appRoutes: Routes = [

  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
   { path: 'address', component: AddressComponent },
   { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    AddressComponent,
    NavComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
