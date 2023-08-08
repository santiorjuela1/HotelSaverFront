import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  public urlClient = 'http://localhost:8080/apiClientes/v1';

  constructor(private http : HttpClient) { }

  public createClient(client: Cliente): Observable<any> {
    return this.http.post(this.urlClient + '/createClient', client);
  }

  public getClient(documento: number): Observable<any> {
    return this.http.get(this.urlClient + `getClient/${documento}`);
  }

  public deleteClient(documento: number): Observable<any> {
    return this.http.delete(this.urlClient + `deleteClient/${documento}`);
  }

  public updateClient(client: Cliente): Observable<any> {
    return this.http.put(this.urlClient + '/putClient', client);
  }
}
