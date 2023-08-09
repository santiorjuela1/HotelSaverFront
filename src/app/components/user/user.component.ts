import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  reservas : boolean = false;
  userCorreo! : string;
  user! : User;
  reservations: Reservation[] =[];
  constructor(private userService : UserServiceService,
              private route : ActivatedRoute,
              private reservationService : ReservationServiceService,
              private router : Router){
            this.route.queryParams.subscribe(params =>{
              this.userCorreo = params['correo'];
              console.log(this.userCorreo);
              this.getUserByCorreo();
            })

  }
  ngOnInit(): void {  
  }

  getUserByCorreo(): void {
    this.userService.getUserByCorreo(this.userCorreo).subscribe(
      (response) => {
        this.user = response;
        this.getReservationsByDocumento();
      },
      (error) => {
        console.error('Error fetching user by correo:', error);
      }
    );
  }

  public getReservationsByDocumento(){
  if(this.user){
      this.reservationService.getAllByUserDocumento(this.user.userID!.documento).subscribe(
        (response : Reservation[]) =>{
          console.log(response);
          this.reservations = response;
        },
        (error) =>{
        console.error('Error: ', error);
        }
      )
    }
    else{
      console.warn('Hotel object is undefined. Cannot fetch reservations.');
    }
  }

  public updateUser(){
    this.router.navigate(['/updateUser'], {
      queryParams : { correo : this.userCorreo}
    });
  }

}
