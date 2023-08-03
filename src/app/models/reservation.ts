import { Cliente } from "./cliente";
import { ReservationID } from "./reservation-id";

export interface Reservation {
    reservationID: ReservationID;
    fechaInicio: string;
    fechaFin: string;
    numeroHabitaciones: number;
    cedulas: Cliente[];
    hotelID: string;
    documento: number;
    tipoDocumento: string;
}
