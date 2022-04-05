import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm!:FormGroup;
  constructor(private route: Router) {
    this.userForm= new FormGroup(
      {
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password': new FormControl(null,[Validators.required,Validators.minLength(8)])
      }
    )
   }
  hide = true;
  ngOnInit(): void {
  }
  submit(){
   if(this.userForm.status!='INVALID')
   console.log('hello')
   console.log( this.userForm.controls.email.value)
   localStorage.setItem('token','CfDJ8OW5OI0CPGJBgSNlGwO0x4YF7qbYKVv7KOO-N0eFtDUzXOrL7F9Xd9W1otVi4ueJOkAmAhuoHFWNkqRaFD7zvAMHMSKncl6Vo5QXKmpvy6vqxOKxSURdIey8aZPRi3Nnhp2p9la-Al5xrVKz0lignRdcCHf3O7pF9zv_sNx_c_T7pUe3WsxaJEPX3t_9FO2Wjw'
   )
   this.userForm.controls.email.value == 'rahul@gmail.com' ? localStorage.setItem('userType','employee') : localStorage.setItem('userType','admin');

  this.route.navigate(['./dashboard'])
  }
  f(){
    return this.userForm.controls;
  }

}
