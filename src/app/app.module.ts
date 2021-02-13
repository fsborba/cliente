import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './cliente/formulario/formulario.component';
import { TabelaComponent } from './cliente/tabela/tabela.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      FormularioComponent,
      TabelaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
