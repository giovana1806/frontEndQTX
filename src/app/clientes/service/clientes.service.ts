import { Injectable } from '@angular/core';
import { Iclientes } from './iclientes';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly  API ="http://localhost:8080/clientes";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Iclientes[]>(this.API);
  }
  listarPorId(id:object) {
    return this.http.get<Iclientes>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(cliente:object) {
    return this.http.post(this.API, cliente).pipe(take(1));
  }

  atualizar(cliente:any){
    return this.http.put(`${this.API}/${cliente.id}`, cliente).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
