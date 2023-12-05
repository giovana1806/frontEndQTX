import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ListarprojetoComponent } from './listarprojeto/listarprojeto.component';



@NgModule({
  declarations: [
    ListarprojetoComponent,
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
