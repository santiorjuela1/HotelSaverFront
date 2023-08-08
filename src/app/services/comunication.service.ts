import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  public idSource = new Subject<String>();

  id$ = this.idSource.asObservable();

  constructor() { }

  public sendHotelID(id : string){
    // Asignando el valor de idSource al id que recibimos
    this.idSource.next(id);
  }
}
