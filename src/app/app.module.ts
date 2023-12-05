import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFornecedorComponent } from './fornecedor/form-fornecedor/form-fornecedor.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormProjetoComponent } from './projeto/form-projeto/form-projeto.component';
import { FormFuncionarioComponent } from './funcionario/form-funcionario/form-funcionario.component';
import { FormDepartamentoComponent } from './departamento/form-departamento/form-departamento.component';
import { FormEmpresaComponent } from './empresa/form-empresa/form-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    FormFornecedorComponent,
    FormClientesComponent,
    FormFuncionarioComponent,
    FormDepartamentoComponent,
    FormEmpresaComponent,
    InicioComponent,
    FormProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
