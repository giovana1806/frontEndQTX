import { Injectable } from '@angular/core';
import { idepartamento } from './idepartamento'; 
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private readonly  API ="http://localhost:8080/departamento";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<idepartamento[]>(this.API);
  }
  listarPorId(id:object) {
    return this.http.get<idepartamento>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(departamento:object) {
    return this.http.post(this.API, departamento).pipe(take(1));
  }

  atualizar(departamento:any){
    return this.http.put(`${this.API}/${departamento.id}`, departamento).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
