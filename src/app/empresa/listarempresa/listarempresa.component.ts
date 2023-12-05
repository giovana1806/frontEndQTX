import { Component, OnInit } from '@angular/core';
import { IEmpresa } from '../service/iempresa' 
import { EmpresaService } from '../service/empresa.service'; 
import { ActivatedRoute, Router} from '@angular/router'; 
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-listarempresa',
  templateUrl: './listarempresa.component.html',
  styleUrls: ['./listarempresa.component.scss']
})
export class ListarEmpresaComponent implements OnInit{
  empresa: IEmpresa[]=[]; 
   
  form = new FormGroup({ 
    id: new FormControl(),
    nome: new FormControl(''),
    cnpj: new FormControl(''),
    endereco: new FormControl(''),
    socios: new FormControl(''),
    faturamento: new FormControl(''),
  }) 
 
  constructor( 
    private service: EmpresaService,  
    private router: Router,  
    private route: ActivatedRoute){ } 
 
  ngOnInit(): void { 
     this.Listar(); 
  } 
 
  Listar(){ 
     this.service.listar().subscribe(dados => this.empresa = dados); 
  } 

  Editar(id:number){ 
    this.router.navigate(['editar', id], {relativeTo: this.route}); 
  } 
 
  Excluir(id:number){ 
    this.service.excluir(id).subscribe( 
      success => { 
        alert("Empresa excluida com sucesso!") 
        this.service.listar().subscribe(dados => this.empresa = dados); 
      }, 
      Error => alert("Erro ao excluir a empresa.") 
    ); 
  } 
}
