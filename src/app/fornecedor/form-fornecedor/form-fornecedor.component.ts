import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FornecedorService } from '../service/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Ifornecedor } from '../service/ifornecedor';

@Component({
  selector: 'app-form-fornecedor',
  templateUrl: './form-fornecedor.component.html',
  styleUrls: ['./form-fornecedor.component.scss']
})
export class FormFornecedorComponent implements OnInit{ 
  form = new FormGroup({ 
    id: new FormControl(), 
    nome: new FormControl(''), 
    cnpj: new FormControl(''), 
    ie: new FormControl(''), 
    endereco: new FormControl(''), 
    email: new FormControl(''), 
  }) 
   
  constructor(  
    private service:FornecedorService,  
    private route:ActivatedRoute,  
    private router: Router  
  ){ }  
 
  ngOnInit(){ this.ListarPorId(); }  
     
  Salvar() {  
    if(this.form.value.id){  
      this.service.atualizar(this.form.value).subscribe(  
        success => {  
          alert("Fornecedor atualizado com sucesso!");  
          this.router.navigate(['']);  
        },  
        Error => alert("Erro ao atualizar o fornecedor")  
      );  
    }  
    else{   
      this.service.criar(this.form.value).subscribe(  
        success => {  
          alert("Fornecedor cadastrado com sucesso!");  
          this.router.navigate(['']);  
        }, 
        Error => alert("Erro ao cadastrar o fornecedor")  
      );  
    }  
    this.form.reset();      
  }  
  ListarPorId(){  
    this.route.params  
    .pipe(  
      map((params: any) => params['id']),  
      switchMap(id => this.service.listarPorId(id))  
     
    ).subscribe(fornecedor => this.atualizarForm(fornecedor));  
  }  
  atualizarForm(fornecedor: Ifornecedor){  
    this.form.patchValue({  
      id: fornecedor.id,  
      nome:fornecedor.nome,  
      cnpj:fornecedor.cnpj, 
      ie:fornecedor.ie, 
      endereco:fornecedor.endereco, 
      email:fornecedor.email, 
    });  
  }  
  Cancelar() {      
    this.form.reset();  
    console.log('Cancelado');    
  }     
} 