import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-log-in-hotel',
  templateUrl: './log-in-hotel.component.html',
  styleUrls: ['./log-in-hotel.component.css']
})
export class LogInHotelComponent {
  allHotels : Hotel []= []
  public wrongCredentials : boolean = false;
  hotel !: Hotel;

  public loginForm = new FormGroup({
    correo : new FormControl('', [Validators.required, Validators.email, Validators.minLength(5),Validators.maxLength(30)]),
    contrasena : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
  })

 
  constructor(private router : Router, private service : HotelServiceService ){
    this.getAllUsers();
  }

  public getAllUsers() {
    this.service.getAllHotels().subscribe(
      (response: Hotel[]) => {
        this.allHotels = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  loginHotel(){
    if(this.loginForm.valid){
      const correo = this.loginForm.get('correo')?.value;
      const contrasena = this.loginForm.get('contrasena')?.value;
      if(this.rightCredentials(correo, contrasena)){
        this.redirectHotels(correo!);
      }
      else{
        this.wrongCredentials = true;
      }
    }
  }
  
  public rightCredentials(correo : any, contrasena :any): boolean{
    for(const eachHotel of this.allHotels){
      if(eachHotel.correo === correo && eachHotel.contrasena === contrasena){
        return true;
      }
    }
    return false;
  }

  public redirectToRegister(){
    this.router.navigate(['/registrohotel'])
  }


  public redirectHotels(correo : string) {
    this.router.navigate(['/hotel'], {
      queryParams: { correo : correo }
    });
  }

}


