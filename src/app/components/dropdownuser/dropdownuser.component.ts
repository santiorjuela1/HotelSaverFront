import { Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdownuser',
  templateUrl: './dropdownuser.component.html',
  styleUrls: ['./dropdownuser.component.css']
})
export class DropdownuserComponent implements OnInit{
  @Input() correoUser!: string;

  constructor(private router : Router) { }
  ngOnInit(): void {
  }

  public redirectToLoginUser() {
    this.router.navigate(['/loginuser'])
  }

  public redirectToUser() {
    console.log(this.correoUser);
    
    this.router.navigate(['/user'], {
      queryParams: { correo: this.correoUser }
    });
    
  }
}
