import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { InicioComponent } from './inicio/inicio.component';
import { ProjetoModule } from './projeto/projeto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { EmpresaModule } from './empresa/empresa.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:"inicio", component: InicioComponent},
  {path:'clientes', loadChildren:()=> ClientesModule},
  {path:'fornecedor', loadChildren:()=> FornecedorModule},
  {path:'funcionario', loadChildren:()=> FuncionarioModule},
  {path:'departamento', loadChildren:()=> DepartamentoModule},
  {path:'empresa', loadChildren:()=> EmpresaModule},
  {path:'projeto', loadChildren:()=> ProjetoModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
