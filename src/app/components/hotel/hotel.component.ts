import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { Reservation } from 'src/app/models/reservation';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { PasswordPipePipe } from 'src/app/pipes/password-pipe.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  // Variables
  correoHotel!: string;
  hotel!: Hotel;
  reservations: Reservation[] = [];
  precio! : number;

  // Constructor
  constructor(
    private hotelService: HotelServiceService,
    private reservationService: ReservationServiceService,
    private route: ActivatedRoute,
    private router : Router,
    private dialog : MatDialog,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.correoHotel = params['correo'];
      this.getHotelByCorreo();
    });
  }

  // Methods
  ngOnInit(): void {
  }

  public getHotelByCorreo() {
    this.hotelService.getHotelByCorreo(this.correoHotel).subscribe(
      (params) => {
        this.hotel = params;
        this.getReservationsByHotelID();
      }
    );
  }

  public getReservationsByHotelID() {
    if (this.hotel) {
      this.reservationService.getReservationsByHotelID(this.hotel.id).subscribe(
        (response: Reservation[]) => {
          this.reservations = response;
          console.log(this.reservations);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
    } else {
      console.warn('Hotel object is undefined. Cannot fetch reservations.');
    }
  }
  public updateHotel(){
    this.router.navigate(['/updateHotel'], {
      queryParams: { correo : this.correoHotel}
    });
  }

}

  
