import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-hotel',
  templateUrl: './log-in-hotel.component.html',
  styleUrls: ['./log-in-hotel.component.css']
})
export class LogInHotelComponent {
  constructor(private router : Router){

  }

  public redirectToRegister(){
    this.router.navigate(['/registrohotel'])
  }
}
