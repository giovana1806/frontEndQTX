import { Injectable } from '@angular/core';
import { Ifornecedor } from './ifornecedor';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private readonly  API ="http://localhost:8080/fornecedores"; 
 
  constructor(private http: HttpClient) { } 
 
  listar(){ 
    return this.http.get<Ifornecedor[]>(this.API); 
  } 
  listarPorId(id:object) { 
    return this.http.get<Ifornecedor>(`${this.API}/${id}`).pipe(take(1)); 
  } 
 
  criar(fornecedor:object) { 
    return this.http.post(this.API, fornecedor).pipe(take(1)); 
  } 

  atualizar(fornecedor:any){ 
    return this.http.put(`${this.API}/${fornecedor.id}`, fornecedor).pipe(take(1)); 
  } 

  excluir(id:any){ 
    return this.http.delete(`${this.API}/${id}`).pipe(take(1)); 
  } 
} 