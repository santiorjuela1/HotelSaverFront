import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  reservas : boolean = false;
  user! : User;
  constructor(private userService : UserServiceService,
              private route : ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = params['correo'];
      this.getUserByCorreo();
    });
  }

  getUserByCorreo(): void {
    this.userService.getUserByCorreo(this.user).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.error('Error fetching user by correo:', error);
      }
    );
  }
  

  
}