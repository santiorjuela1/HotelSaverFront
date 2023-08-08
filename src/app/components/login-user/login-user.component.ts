import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  allUsers : User []= []
  public wrongCredentials : boolean = false;
  user !: User;

  public loginForm = new FormGroup({
    correo : new FormControl('', [Validators.required, Validators.email, Validators.minLength(5),Validators.maxLength(30)]),
    contrasena : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
  })

 
  constructor(private router : Router, private service : UserServiceService ){
    this.getAllUsers();
  }

  public getAllUsers() {
    this.service.getAllUsers().subscribe(
      (response: User[]) => {
        this.allUsers = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  loginUser(){
    if(this.loginForm.valid){
      const correo = this.loginForm.get('correo')?.value;
      const contrasena = this.loginForm.get('contrasena')?.value;
      if(this.checkCredentials(correo, contrasena)){
        this.redirectHotels(correo!);
      }
      else{
        this.wrongCredentials = true;
      }
    }
  }
  
  public checkCredentials(correo : any, contrasena :any): boolean{
    for(const eachUser of this.allUsers){
      if(eachUser.correo === correo && eachUser.contrasena === contrasena){
        return true;
      }
    }
    return false;
  }

  public redirectRegistroUser(){
    this.router.navigate(['/registroUser'])
  }

  public redirectHotels(correo : string) {
    this.router.navigate(['/hoteles'], {
      queryParams: { correo : correo }
    });
  }

}
