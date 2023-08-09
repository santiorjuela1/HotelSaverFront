import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public urlUser = 'http://localhost:8080/apiUsers/v1';

  constructor(private http : HttpClient) { 
  }

    public createUser(user: any): Observable<any> {
      return this.http.post(`${this.urlUser}/createUser`, user);
    }
  
    public getUser(documento: number, tipoDocumento: string): Observable<any> {
      return this.http.get(`${this.urlUser}/getUser/${documento}/${tipoDocumento}`);
    }
  
    public deleteUser(documento: number, tipoDocumento: string): Observable<any> {
      return this.http.delete(`${this.urlUser}/deleteUser/${documento}/${tipoDocumento}`);
    }
  
    public updateUser(user: User): Observable<any> {
      return this.http.put(`${this.urlUser}/updateUser`, user);
    }
  
    public getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.urlUser}/getAllUsers`);
    }
  
    public getUserByCorreo(correo: any): Observable<any> {
      return this.http.get(`${this.urlUser}/getUserByCorreo/${correo}`);
    }
  }
