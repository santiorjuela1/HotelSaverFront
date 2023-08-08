import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  // allUsers : User []= []
  // public wrongCredentials : boolean = false;

  // public loginForm = new FormGroup({
  //   correo : new FormControl('', Validators.required),
  //   contrasena : new FormControl('', Validators.required),
  // })

 
  // constructor(private router : Router, private service : UserServiceService ){
  //   this.getAllUsers();
  // }

  // public getAllUsers() {
  //   this.service.getAllUsers().subscribe(
  //     (response: User[]) => {
  //       this.allUsers = response;
  //       console.log(this.allUsers);
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

  // loginUser(){
  //   const correo = this.loginForm.get('correo')?.value;
  //   const contrasena = this.loginForm.get('contrasena')?.value;
  //   console.log("loginUserComponent");
  //   if(this.checkCredentials(correo, contrasena)){
  //     this.redirectHotels();
  //   }
  //   else{
  //     this.wrongCredentials = true;
  //     console.log("wrong credentials");
      
  //   }
  // }
  
  // public checkCredentials(correo : any, contrasena :any): boolean{
  //   for(const eachUser of this.allUsers){
  //     if(eachUser.correo === correo && eachUser.contrasena === contrasena){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // public redirectRegistroUser(){
  //   this.router.navigate(['/registroUser'])
  // }

  // public redirectHotels(){
  //   this.router.navigate(['/hotels']);
  // }

}
