import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  reservationUrl: string = 'http://localhost:8080/apiReservations/v1';

  constructor(private http: HttpClient) { }

  public createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.reservationUrl}/createReservation`, reservation);
  }

  public getReservation(documento: number, tipoDocumento: string, hotelID: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.reservationUrl}/getReservation/${documento}/${tipoDocumento}/${hotelID}`);
  }

  public deleteReservation(documento: number, tipoDocumento: string, hotelID: string): Observable<void> {
    return this.http.delete<void>(`${this.reservationUrl}/deleteReservation/${documento}/${tipoDocumento}/${hotelID}`);
  }

  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.reservationUrl}/updateReservation`, reservation);
  }

  public getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}/getAllReservations`);
  }

  public getReservationsByHotelID(hotelID: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}/getAllByHotelID/${hotelID}`);
  }

  public getAllByUserDocumento(documento: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}/getAllByUserDocumento/${documento}`);
  }
}
