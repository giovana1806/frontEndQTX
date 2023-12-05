import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListarclientesComponent } from './listarclientes/listarclientes.component';



@NgModule({
  declarations: [
    ListarclientesComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
