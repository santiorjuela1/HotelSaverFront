import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{
  receivedHotelID !: String;
  private suscription! : Subscription;
  user! : User;
  correoUser! : string;
  hotelID! : string;
  // Lista de formGroups
  nuevoFormClient: { formGroup: FormGroup }[] = [];
  clientes : Cliente[] =[];

  constructor(private service : ReservationServiceService,
    private route : ActivatedRoute,
    private userService : UserServiceService,
    private clientService : ClientServiceService){
}

ngOnInit(): void {
  //getting the params
  const queryParams = this.route.snapshot.queryParams;

  this.route.queryParamMap.subscribe((paramMap) => {
    this.correoUser = paramMap.get('correoUser')!;
    this.hotelID = paramMap.get('id')!;
    console.log(this.correoUser);
    console.log(this.hotelID);
  });

  this.userService.getUserByCorreo(this.correoUser).subscribe(
    (user) => {
      console.log('User data:', user);
      this.user = user;
    },
    (error) => {
      console.error('Error fetching user:', error);
    }
  );
}

  public formReserva = new FormGroup({
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    numeroHabitaciones: new FormControl('', Validators.required), 
  });
  
public addCliente(){
    const clienteGroup = new FormGroup({
      documento: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
      tipoDocumento: new FormControl('', Validators.required)
    })

    this.nuevoFormClient.push({ formGroup: clienteGroup });
  }

  public createClient() {
    this.clientes = this.nuevoFormClient.map((eachFormGroup) => ({
      documento: eachFormGroup.formGroup.get('documento')?.value || '',
      tipoDocumento: eachFormGroup.formGroup.get('tipoDocumento')?.value || '',
      hotelID: this.hotelID,
      documentoUser: this.user.userID?.documento!,
      tipoDocumentoUser: this.user.userID?.tipoDocumento!,
    }));
    for(const eachClient of this.clientes){
      this.clientService.createClient(eachClient).subscribe(
        (response) => {
          console.log('Usuario creado exitosamente: '+ eachClient);
        },
        (error) => {
          console.log('error: '+ error); 
        }
      )
    }
  }

  public createReservation(){
    if (this.formReserva.valid) {
      const reservation: Reservation = {
         reservationID: {
           userID: {
             documento: this.user.userID?.documento!,
             tipoDocumento: this.user.userID?.tipoDocumento!,
           },
           hotelID: this.hotelID
         },
         fechaInicio: this.formReserva.get('fechaInicio')?.value || '',
         fechaFin: this.formReserva.get('fechaFin')?.value || '',
         numeroHabitaciones: parseInt(this.formReserva.get('numeroHabitaciones')?.value!),
         cedulas : this.clientes,
         hotelID : this.hotelID,
         documento : this.user.userID?.documento!,
         tipoDocumento : this.user.userID?.tipoDocumento!,

      };  
       this.service.createReservation(reservation).subscribe(
         (response) => {
           console.log('Reservation created successfully:', response);
           this.createClient();
         },
         (error) => {
           console.error('Error creating reservation:', error);
         }
       );
    }
  }

  public removeCliente(index: number): void {
    if (index >= 0 && index < this.nuevoFormClient.length) {
      this.nuevoFormClient.splice(index, 1);
    }
  }
  

}
  

