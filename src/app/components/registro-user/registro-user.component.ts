import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent {

  public allUsers: User[] = [];

  public formUser = new FormGroup({
    documento: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
    tipoDocumento: new FormControl('', Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    correo: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5),Validators.maxLength(30)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)])
  })

  constructor(private service: UserServiceService, private router : Router) {
    this.getAllUsers();
  }

  public initData() {
    const correoRepetido: boolean = this.checkCorreo();

    if (correoRepetido) {
      return;
    }

    if (this.isFormValid()) {
      const user: User = {
        userID: {
          documento: this.formUser.get('documento')?.value,
          tipoDocumento: this.formUser.get('tipoDocumento')?.value
        },
        nombre: this.formUser.get('nombre')?.value,
        correo: this.formUser.get('correo')?.value,
        contrasena: this.formUser.get('contrasena')?.value,
        telefono: this.formUser.get('telefono')?.value,
        resevations: []
      };
      this.service.createUser(user).subscribe(
        (response) => {
          console.log(response);
         this.redirectLogin()
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Form is not valid.');
    }
  }

  public getAllUsers() {
    this.service.getAllUsers().subscribe(
      (response: User[]) => {
        this.allUsers = response;
        console.log(this.allUsers);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  public checkCorreo() {
    const correo = this.formUser.get('correo')?.value;

    const userWithEmail = this.allUsers.find(user => user.correo === correo);

    if (userWithEmail) {
      console.log("Use another gmail");
      return true;
    }
    return false;
  }

  public isFormValid(): boolean {
    return this.formUser.valid;
  }

  public redirectLogin(){
    this.router.navigate(['/login']);
  }
}
