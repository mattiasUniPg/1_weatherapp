import { Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { CittaInserimentoComponent } from './components/citta-inserimento/citta-inserimento.component';

export const routes: Routes = [

{ path: "", redirectTo: "citta-inserimento", pathMatch:"full" } ,   
{ path: "home", component: HomeComponent } , 
{ path: "grafico", component: GraficoComponent },
{ path: "citta-inserimento", component: CittaInserimentoComponent }


    
];
