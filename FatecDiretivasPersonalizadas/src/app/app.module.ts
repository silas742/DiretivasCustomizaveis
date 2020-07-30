import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SombraTabelaDirective } from './sombra-tabela.directive';
import { CorComponenteDirective } from './cor-componente.directive';



@NgModule({
  declarations: [
    AppComponent,
    SombraTabelaDirective,
    CorComponenteDirective,
    
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
