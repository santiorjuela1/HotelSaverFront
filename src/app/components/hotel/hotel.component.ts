import { Component } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  constructor(private hotelService : HotelServiceService,
     private reservationService : ReservationServiceService){

  }

}
