import { Injectable } from '@angular/core';
import { Iprojeto } from './iprojeto';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private readonly  API ="http://localhost:8080/projeto";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Iprojeto[]>(this.API);
  }
  listarPorId(id:object) {
    return this.http.get<Iprojeto>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(projeto:object) {
    return this.http.post(this.API, projeto).pipe(take(1));
  }

  atualizar(projeto:any){
    return this.http.put(`${this.API}/${projeto.id}`, projeto).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
