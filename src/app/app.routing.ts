//Importes necesario
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importes de los componentes   

import { HomeComponent } from "./components/home/home.component";
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from "./components/error/error.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'tecnologias', component:TecnologiasComponent},
    { path: 'servicios',component:ServiciosComponent },
    { path: 'acerca', component:AcercaComponent},
    { path: 'experiencia', component:ExperienciaComponent},
    { path: 'contacto', component:ContactoComponent},
    { path: '**', component:ErrorComponent  }


];

//Exportar configuraciones
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)