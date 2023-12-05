import { Component, OnInit } from '@angular/core';
import { IFuncionario } from '../service/ifuncionario' 
import { FuncionarioService } from '../service/funcionario.service'; 
import { ActivatedRoute, Router} from '@angular/router'; 
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-listarfuncionario',
  templateUrl: './listarfuncionario.component.html',
  styleUrls: ['./listarfuncionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit{
  funcionario: IFuncionario[]=[]; 
   
  form = new FormGroup({ 
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(''),
    areaAtuacao: new FormControl(''),
    localTrabalho: new FormControl(''),
  }) 
 
  constructor( 
    private service: FuncionarioService,  
    private router: Router,  
    private route: ActivatedRoute){ } 
 
  ngOnInit(): void { 
     this.Listar(); 
  } 
 
  Listar(){ 
     this.service.listar().subscribe(dados => this.funcionario = dados); 
  } 

  Editar(id:number){ 
    this.router.navigate(['editar', id], {relativeTo: this.route}); 
  } 
 
  Excluir(id:number){ 
    this.service.excluir(id).subscribe( 
      success => { 
        alert("Cliente excluido com sucesso!") 
        this.service.listar().subscribe(dados => this.funcionario = dados); 
      }, 
      Error => alert("Erro ao excluir o funcionario ") 
    ); 
  } 
}
