import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //public urlUser = environment.urlUser;

  constructor(private http : HttpClient) { 

  }
  public createUser(user : any){
    return this.http.post('http://localhost:8080/apiUsers/v1' + '/createUser', user);
  }

  public getUser(documento : number, tipoDocumento : string){
    return this.http.get('http://localhost:8080/apiUsers/v1' + '/getUser/${documento}/${tipoDocumento}');
  }

  public deleteUser(documento : number, tipoDocumento : string){
    return this.http.delete('http://localhost:8080/apiUsers/v1' + '/deleteUser/${documento}/${tipoDocumento}');
  }

  public updateUser(user : any){
    return this.http.put('http://localhost:8080/apiUsers/v1' + '/updateUser', user);
  }

  public getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/apiUsers/v1' + '/getAllUsers');
  }
}
