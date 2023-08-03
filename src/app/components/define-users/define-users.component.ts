import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-define-users',
  templateUrl: './define-users.component.html',
  styleUrls: ['./define-users.component.css']
})
export class DefineUsersComponent {

  constructor(private router : Router){

  }

  public sendHotelLogin(){
    this.router.navigate(['/loginhotel'])
  }

  public sendUserLogin(){
    this.router.navigate(['/login'])
  }
}
