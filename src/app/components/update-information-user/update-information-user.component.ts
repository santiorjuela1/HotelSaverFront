import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-information-user',
  templateUrl: './update-information-user.component.html',
  styleUrls: ['./update-information-user.component.css']
})
export class UpdateInformationUserComponent implements OnInit, OnDestroy {
  updateForm!: FormGroup;
  correoUser!: string;
  user!: User;
  updatedUser!: User;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]),
      correo: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5),Validators.maxLength(30)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    });

    this.subscription.add(
      this.route.queryParams.subscribe(params => {
        this.correoUser = params['correo'];

        this.subscription.add(
          this.userService.getUserByCorreo(this.correoUser).subscribe(
            (user: User) => {
              this.user = user;
              this.updateForm.patchValue(this.user);
            },
            (error) => {
              console.log('error' + error);
            }
          )
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

 public onSubmit() {
    if (this.updateForm.valid) {
      const updatedUser: User = {
        userID: {
          documento: this.user.userID?.documento!,
          tipoDocumento: this.user.userID?.tipoDocumento!
        },
        nombre: this.updateForm.get('nombre')?.value,
        correo: this.updateForm.get('correo')?.value,
        contrasena: this.updateForm.get('contrasena')?.value,
        telefono: this.updateForm.get('telefono')?.value
      };
      console.log('hola'+ updatedUser);
      
      this.updateUser(updatedUser);
    }
  }

  public updateUser(user: User) {
    console.log("prueba de metodo");
    
    this.subscription.add(
      this.userService.updateUser(user).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/loginuser']);
        },
        (error) => {
          console.log('error' + error);
        }
      )
    );
  }
}