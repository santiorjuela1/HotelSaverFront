import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-update-information-hotel',
  templateUrl: './update-information-hotel.component.html',
  styleUrls: ['./update-information-hotel.component.css']
})
export class UpdateInformationHotelComponent implements OnInit {
  updateForm!: FormGroup; // Define the form group
  correoHotel!: string;
  hotel!: Hotel;
  updatedHotel! : Hotel;

  constructor(private route: ActivatedRoute, 
    private hotelService: HotelServiceService,
    private router : Router) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      nombre : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      capacidadReserva : new FormControl('', Validators.required),
      telefono : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      correo : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(35)]),
      numeroHabitaciones : new FormControl('', Validators.required),
      precioNoche : new FormControl('', Validators.required),
      contrasena : new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
      estrellas : new FormControl('', Validators.required),
      direccion : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    });

    this.route.queryParams.subscribe(params => {
      this.correoHotel = params['correo'];

      this.hotelService.getHotelByCorreo(this.correoHotel).subscribe(
        (params) => {
          this.hotel = params;
          this.updateForm.patchValue(this.hotel);
          console.log(this.hotel);
        }
      );
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
       const updatedHotel: Hotel = {
        id: this.hotel.id,
        nombre: this.updateForm.get('nombre')?.value,
        direccion: this.updateForm.get('direccion')?.value,
        capacidadReserva: this.updateForm.get('capacidadReserva')?.value,
        telefono: this.updateForm.get('telefono')?.value,
        correo: this.updateForm.get('correo')?.value,
        numeroHabitaciones: this.updateForm.get('numeroHabitaciones')?.value,
        precioNoche: this.updateForm.get('precioNoche')?.value,
        estrellas: this.updateForm.get('estrellas')?.value,
        contrasena: this.updateForm.get('contrasena')?.value,
      };
      this.updateHotel(updatedHotel)
      }
    }

    public updateHotel(hotel : Hotel){
      this.hotelService.updateHotel(hotel).subscribe(
        (response) =>{
          console.log(response);
          this.router.navigate(['/loginhotel']);
        },
        (error) =>{
          console.log('error' + error);
        }
      )
    }
}
