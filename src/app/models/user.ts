import { Reservation } from "./reservation";
import { UserID } from "./user-id";

export interface User {
    userID?: UserID;
    nombre?: any;
    correo?: any;
    contrasena?: any;
    telefono?: any;
    resevations?: Reservation[];
}


