import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartamentoService } from '../service/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { idepartamento } from '../service/idepartamento';

@Component({
  selector: 'app-form-departamento',
  templateUrl: './form-departamento.component.html',
  styleUrls: ['./form-departamento.component.scss']
})
export class FormDepartamentoComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    localidade: new FormControl(''),
    descricaoAtividades: new FormControl(''),
    email: new FormControl(''),
  })
  
  constructor( 
    private service:DepartamentoService, 
    private route:ActivatedRoute, 
    private router: Router 
  ){ } 

  ngOnInit(){ this.ListarPorId(); } 
    
  Salvar() { 
    if(this.form.value.id){ 
      this.service.atualizar(this.form.value).subscribe( 
        success => { 
          alert("Departamento atualizado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao atualizar o departamento.") 
      ); 
    } 
    else{  
      this.service.criar(this.form.value).subscribe( 
        success => { 
          alert("Departamento cadastrado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao cadastrar o departamento.") 
      ); 
    } 
    this.form.reset();     
  } 
  ListarPorId(){ 
    this.route.params 
    .pipe( 
      map((params: any) => params['id']), 
      switchMap(id => this.service.listarPorId(id)) 
    
    ).subscribe(departamento => this.atualizarForm(departamento)); 
  } 
  atualizarForm(departamento: idepartamento){ 
    this.form.patchValue({ 
      id: departamento.id, 
      nome:departamento.nome, 
      localidade:departamento.localidade,
      descricaoAtividades: departamento.descricaoAtividades,
      email:departamento.email,
    }); 
  } 
  Cancelar() {     
    this.form.reset(); 
    console.log('Cancelado!');   
  }    
}
