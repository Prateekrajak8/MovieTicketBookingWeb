import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(private router: Router){

   }
   logindata=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
   })
   getdata(data:any){
    console.log(data);
   }
   navigateToDashboard(){
    this.router.navigateByUrl('dashboard')
   }
}
