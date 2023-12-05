import { Injectable } from '@angular/core';
import { IEmpresa } from './iempresa';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private readonly  API ="http://localhost:8080/empresa";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<IEmpresa[]>(this.API);
  }
  listarPorId(id:object) {
    return this.http.get<IEmpresa>(`${this.API}/${id}`).pipe(take(1));
  }

  criar(empresa:object) {
    return this.http.post(this.API, empresa).pipe(take(1));
  }

  atualizar(empresa:any){
    return this.http.put(`${this.API}/${empresa.id}`, empresa).pipe(take(1));
  }

  excluir(id:any){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
