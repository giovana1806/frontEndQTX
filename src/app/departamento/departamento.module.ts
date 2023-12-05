import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { ListarDepartamentoComponent } from './listardepartamento/listardepartamento.component';



@NgModule({
  declarations: [
    ListarDepartamentoComponent,
  ],
  imports: [
    CommonModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }
