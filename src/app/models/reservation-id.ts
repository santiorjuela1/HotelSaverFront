import { UserID } from "./user-id";

export interface ReservationID {
    userID: UserID;
    hotelID: string | null;
}
