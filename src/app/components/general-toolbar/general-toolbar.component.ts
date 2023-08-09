import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-toolbar',
  templateUrl: './general-toolbar.component.html',
  styleUrls: ['./general-toolbar.component.css']
})
export class GeneralToolbarComponent {

  constructor(private router : Router){}

  publicSendInicio(){
    this.router.navigate(['/inicio'])
  }
}
