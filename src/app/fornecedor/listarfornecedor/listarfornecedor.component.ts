import { Component, OnInit } from '@angular/core';
import { Ifornecedor } from '../service/ifornecedor';
import { FornecedorService } from '../service/fornecedor.service';
import { ActivatedRoute, Router} from '@angular/router'; 
import { FormControl, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-listarfornecedor',
  templateUrl: './listarfornecedor.component.html',
  styleUrls: ['./listarfornecedor.component.scss']
})
export class ListarfornecedorComponent  implements OnInit{ 
  fornecedor: Ifornecedor[]=[];  
    
  form = new FormGroup({  
    id: new FormControl(), 
    nome: new FormControl(''), 
    cnpj: new FormControl(''), 
    ie: new FormControl(''), 
    endereco: new FormControl(''), 
    email: new FormControl(''), 
  })  
  
  constructor(  
    private service: FornecedorService,   
    private router: Router,   
    private route: ActivatedRoute){ }  
  
  ngOnInit(): void {  
     this.Listar();  
  }  
  
  Listar(){  
     this.service.listar().subscribe(dados => this.fornecedor = dados);  
  }  
 
  Editar(id:number){  
    this.router.navigate(['editar', id], {relativeTo: this.route});  
  }  
  
  Excluir(id:number){  
    this.service.excluir(id).subscribe(  
      success => {  
        alert("Fornecedor excluido com sucesso!")  
        this.service.listar().subscribe(dados => this.fornecedor = dados);  
      },  
      Error => alert("Erro ao excluir o fornecedor")  
    );  
  }  
}  