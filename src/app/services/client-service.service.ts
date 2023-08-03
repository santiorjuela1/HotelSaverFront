import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  public urlClient = environment.urlClient;

  constructor(private http : HttpClient) { }

  public createClient(client : Cliente){
    return this.http.post(this.urlClient + '/createClient', client);
  }

  public getClient(documento : number){
    return this.http.get(this.urlClient + 'getClient/${documento}');
  }

  public deleteClient(documento : number){
    return this.http.delete(this.urlClient + 'deleteClient/${documento}');
  }

  public updateClient(client : Cliente){
    return this.http.put(this.urlClient + '/putClient', client);
  }
}
