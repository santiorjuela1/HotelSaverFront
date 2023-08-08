import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { User } from 'src/app/models/user';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-registro-hotel',
  templateUrl: './registro-hotel.component.html',
  styleUrls: ['./registro-hotel.component.css']
})
export class RegistroHotelComponent {
  public allHotels: Hotel[] = [];
  public correoExists: boolean = false;
  public idExists: boolean = false;

   public formHotel  = new FormGroup({
     id: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
     nombre : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
     capacidadReserva : new FormControl('', Validators.required),
     telefono : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
     correo : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(35)]),
     numeroHabitaciones : new FormControl('', Validators.required),
     precioNoche : new FormControl('', Validators.required),
     contrasena : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
     estrellas : new FormControl('', Validators.required),
     direccion : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
   })

   constructor(private service: HotelServiceService, private router : Router) {
     this.getAllUsers();
   }

   public initData() {
     if (this.isFormValid()) {
      if(this.checkCorreo()){
        this.correoExists = true;
        return;
      }
      else if(this.checkId()){
        this.idExists = true;
        return;
      }
       const hotel: Hotel = {
         id: this.formHotel.get('id')?.value,
         nombre: this.formHotel.get('nombre')?.value,
         capacidadReserva: this.formHotel.get('capacidadReserva')?.value,
         telefono: this.formHotel.get('telefono')?.value,
         correo: this.formHotel.get('correo')?.value,
         numeroHabitaciones: this.formHotel.get('numeroHabitaciones')?.value,
         precioNoche: this.formHotel.get('precioNoche')?.value,
         contrasena: this.formHotel.get('contrasena')?.value,
         estrellas: this.formHotel.get('estrellas')?.value,  
         direccion: this.formHotel.get('direccion')?.value,
       };
       this.service.createHotel(hotel).subscribe(
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
  this.service.getAllHotels().subscribe(
       (response: Hotel[]) => {
         this.allHotels = response;
         console.log(this.allHotels);
       },
       (error) => {
         console.error('Error fetching users:', error);
       }
     );
   }

   public checkCorreo() {
    const correo = this.formHotel.get('correo')?.value;
    const hotelID = this.formHotel.get('id')?.value;

   const hotelWithEmail = this.allHotels.find(hotel => hotel.correo === correo);
   const hotelWithId = this.allHotels.find(hotel => hotel.id === hotelID)

     if (hotelWithEmail || hotelWithId) {
       console.log("Use another gmail/id");
       return true;
     }
     return false;
   }

   public checkId(){
    const hotelID = this.formHotel.get('id')?.value;

    const hotelAlreadyExists = this.allHotels.find(hotel => hotel.id == hotelID);

    if(hotelAlreadyExists){
      return true;
    }
    return false;
   }

   public isFormValid(): boolean {
     return this.formHotel.valid;
   }

   public redirectLogin(){
     this.router.navigate(['/loginhotel']);
  }

}
