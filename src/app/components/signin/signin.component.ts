import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userdata=new FormGroup({
   name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
   email: new FormControl('',[Validators.required,Validators.email]),
   password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
 constructor(private router: Router){

 }
 getdata(userdata:any){
  console.log(userdata);
 }
  navigateToLogin(){
    this.router.navigateByUrl('login')
  }
}
