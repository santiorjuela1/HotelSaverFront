import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http : HttpClient) { }
   public urlHotel = 'http://localhost:8080/apiHotels/v1';

  public createHotel(hotel : Hotel){
    return this.http.post(this.urlHotel + '/createHotel', hotel);
  }

  public getHotel(id : string){
    return this.http.get(this.urlHotel + 'getHotel/${id}');
  }

  public deleteHotel(id : string){
    return this.http.delete(this.urlHotel + 'deleteHotel/${id}');
  }

  public updateHotel(hotel : Hotel){
    return this.http.put(this.urlHotel + '/updateHotel', hotel);
  }

  public getAllHotels(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.urlHotel + '/getAllHotels');
  }

  public getHotelByCorreo(correo: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.urlHotel}/getHotelByCorreo/${correo}`);
  }
}
