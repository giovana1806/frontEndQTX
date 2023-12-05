import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListarFuncionarioComponent } from './listarfuncionario/listarfuncionario.component';



@NgModule({
  declarations: [
    ListarFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
