import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDepartamentoComponent } from './listardepartamento/listardepartamento.component';
import { FormDepartamentoComponent } from './form-departamento/form-departamento.component';

const routes: Routes = [
  {path:"", component: ListarDepartamentoComponent},
  {path:"novo", component: FormDepartamentoComponent},
  {path:"editar/:id", component: FormDepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
