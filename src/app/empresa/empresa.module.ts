import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListarEmpresaComponent } from './listarempresa/listarempresa.component';



@NgModule({
  declarations: [
    ListarEmpresaComponent,
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
