import { Reservation } from "./reservation";
import { UserID } from "./user-id";

export interface User {
    userID?: UserID;
    nombre?: string;
    correo?: string;
    contrasena?: string;
    telefono?: string;
    resevations?: Reservation[];
}


