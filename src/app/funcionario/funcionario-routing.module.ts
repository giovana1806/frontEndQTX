import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFuncionarioComponent } from './listarfuncionario/listarfuncionario.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';

const routes: Routes = [
  {path:"", component: ListarFuncionarioComponent},
  {path:"novo", component: FormFuncionarioComponent},
  {path:"editar/:id", component: FormFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
