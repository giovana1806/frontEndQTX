import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { ListarfornecedorComponent } from './listarfornecedor/listarfornecedor.component';
import { FormFornecedorComponent } from './form-fornecedor/form-fornecedor.component';


@NgModule({
  declarations: [
    ListarfornecedorComponent,
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ]
})
export class FornecedorModule { }
