import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { CittaInserimentoComponent } from './components/citta-inserimento/citta-inserimento.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GraficoComponent, HomeComponent, CittaInserimentoComponent, HttpClientModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_weatherapp';
}
