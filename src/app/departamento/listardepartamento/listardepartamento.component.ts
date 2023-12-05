import { Component, OnInit } from '@angular/core';
import { idepartamento } from '../service/idepartamento' 
import { DepartamentoService } from '../service/departamento.service'; 
import { ActivatedRoute, Router} from '@angular/router'; 
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-listardepartamento',
  templateUrl: './listardepartamento.component.html',
  styleUrls: ['./listardepartamento.component.scss']
})
export class ListarDepartamentoComponent implements OnInit{
  departamento: idepartamento[]=[]; 
   
  form = new FormGroup({ 
    id: new FormControl(),
    nome: new FormControl(''),
    localidade: new FormControl(''),
    descricaoAtividades: new FormControl(''),
    email: new FormControl(''),
  }) 
 
  constructor( 
    private service: DepartamentoService,  
    private router: Router,  
    private route: ActivatedRoute){ } 
 
  ngOnInit(): void { 
     this.Listar(); 
  } 
 
  Listar(){ 
     this.service.listar().subscribe(dados => this.departamento = dados); 
  } 

  Editar(id:number){ 
    this.router.navigate(['editar', id], {relativeTo: this.route}); 
  } 
 
  Excluir(id:number){ 
    this.service.excluir(id).subscribe( 
      success => { 
        alert("Departamento excluido com sucesso!") 
        this.service.listar().subscribe(dados => this.departamento = dados); 
      }, 
      Error => alert("Erro ao excluir o departamento.") 
    ); 
  } 
}
