import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  selectedUserEmail: string = '';

  constructor() { }

  setSelectedUserEmail(email: string) {
    this.selectedUserEmail = email;
  }

  getSelectedUserEmail(): string {
    return this.selectedUserEmail;
  }
}
