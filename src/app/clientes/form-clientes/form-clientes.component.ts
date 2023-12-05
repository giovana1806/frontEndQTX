import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from '../service/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Iclientes } from '../service/iclientes';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.scss']
})
export class FormClientesComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    rg: new FormControl(''),
    endereco: new FormControl(''),
    email: new FormControl(''),
  })
  
  constructor( 
    private service:ClientesService, 
    private route:ActivatedRoute, 
    private router: Router 
  ){ } 

  ngOnInit(){ this.ListarPorId(); } 
    
  Salvar() { 
    if(this.form.value.id){ 
      this.service.atualizar(this.form.value).subscribe( 
        success => { 
          alert("Cliente atualizado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao atualizar o cliente ") 
      ); 
    } 
    else{  
      this.service.criar(this.form.value).subscribe( 
        success => { 
          alert("Cliente cadastrado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao cadastrar o cliente ") 
      ); 
    } 
    this.form.reset();     
  } 
  ListarPorId(){ 
    this.route.params 
    .pipe( 
      map((params: any) => params['id']), 
      switchMap(id => this.service.listarPorId(id)) 
    
    ).subscribe(cliente => this.atualizarForm(cliente)); 
  } 
  atualizarForm(cliente: Iclientes){ 
    this.form.patchValue({ 
      id: cliente.id, 
      nome:cliente.nome, 
      cpf:cliente.cpf,
      rg:cliente.rg,
      endereco:cliente.endereco,
      email:cliente.email,
    }); 
  } 
  Cancelar() {     
    this.form.reset(); 
    console.log('Cancelado');   
  }    
}
