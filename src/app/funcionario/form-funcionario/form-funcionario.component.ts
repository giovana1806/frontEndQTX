import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionarioService } from '../service/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { IFuncionario } from '../service/ifuncionario';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss']
})
export class FormFuncionarioComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(),
    areaAtuacao: new FormControl(''),
    localTrabalho: new FormControl(''),
  })
  
  constructor( 
    private service:FuncionarioService, 
    private route:ActivatedRoute, 
    private router: Router 
  ){ } 

  ngOnInit(){ this.ListarPorId(); } 
    
  Salvar() { 
    if(this.form.value.id){ 
      this.service.atualizar(this.form.value).subscribe( 
        success => { 
          alert("Funcionário atualizado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao atualizar o funcionário.") 
      ); 
    } 
    else{  
      this.service.criar(this.form.value).subscribe( 
        success => { 
          alert("Funcionário cadastrado com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao cadastrar o funcionário.") 
      ); 
    } 
    this.form.reset();     
  } 
  ListarPorId(){ 
    this.route.params 
    .pipe( 
      map((params: any) => params['id']), 
      switchMap(id => this.service.listarPorId(id)) 
    
    ).subscribe(funcionario => this.atualizarForm(funcionario)); 
  } 
  atualizarForm(funcionario: IFuncionario){ 
    this.form.patchValue({ 
      id: funcionario.id, 
      nome:funcionario.nome, 
      cargo:funcionario.cargo,
      salario:funcionario.salario,
      areaAtuacao:funcionario.areaAtuacao,
      localTrabalho:funcionario.localTrabalho,
    }); 
  } 
  Cancelar() {     
    this.form.reset(); 
    console.log('Cancelado');   
  }    
}
