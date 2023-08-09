import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tool-bar',
  templateUrl: './user-tool-bar.component.html',
  styleUrls: ['./user-tool-bar.component.css']
})
export class UserToolBarComponent implements OnInit{
  @Input() correoUser!:string;

  constructor(){
  }
  ngOnInit(): void {
  }
}
