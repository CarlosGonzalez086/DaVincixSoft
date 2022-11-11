import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TecnologiasComponent,
    AcercaComponent,
    ExperienciaComponent,
    ContactoComponent,
    ErrorComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
