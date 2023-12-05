import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpresaService } from '../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { IEmpresa } from '../service/iempresa';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cnpj: new FormControl(''),
    socios: new FormControl(''),
    endereco: new FormControl(''),
    faturamento: new FormControl(),
  })
  
  constructor( 
    private service:EmpresaService, 
    private route:ActivatedRoute, 
    private router: Router 
  ){ } 

  ngOnInit(){ this.ListarPorId(); } 
    
  Salvar() { 
    if(this.form.value.id){ 
      this.service.atualizar(this.form.value).subscribe( 
        success => { 
          alert("Empresa atualizada com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao atualizar a empresa. ") 
      ); 
    } 
    else{  
      this.service.criar(this.form.value).subscribe( 
        success => { 
          alert("Empresa cadastrada com sucesso!"); 
          this.router.navigate(['']); 
        }, 
        Error => alert("Erro ao cadastrar a empresa.") 
      ); 
    } 
    this.form.reset();     
  } 
  ListarPorId(){ 
    this.route.params 
    .pipe( 
      map((params: any) => params['id']), 
      switchMap(id => this.service.listarPorId(id)) 
    
    ).subscribe(empresa => this.atualizarForm(empresa)); 
  } 
  atualizarForm(empresa: IEmpresa){ 
    this.form.patchValue({ 
      id: empresa.id, 
      nome:empresa.nome, 
      cnpj:empresa.cnpj,
      socios:empresa.socios,
      endereco:empresa.endereco,
      faturamento:empresa.faturamento,
    }); 
  } 
  Cancelar() {     
    this.form.reset(); 
    console.log('Cancelado');   
  }    
}
