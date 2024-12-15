import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from '../../models/city';
import { MeteoService } from '../../services/meteo.service';
import { LocationData } from '../../models/location-data';
import { WeatherData } from '../../models/weather-data';
import { OpenStreetMapService } from '../../services/open-street-map.service';
import { OpenMeteoService } from '../../services/open-meteo.service';

@Component({
  selector: 'app-citta-inserimento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './citta-inserimento.component.html',
  styleUrl: './citta-inserimento.component.css'
})
export class CittaInserimentoComponent {
    ricerca?: string;
    elenco: LocationData[] = []
    elencoPreferiti: City[] = []
    locationSelezionata?: string;
    locationLatitudine?: string;
    locationLongitudine?: string;
    meteoDati?: WeatherData;

  constructor(private osmService: OpenStreetMapService,
      private meteoService: OpenMeteoService,
      private prefService: MeteoService) {

  }
  ngOnInit() {
    this.elencoPreferiti = this.prefService.Lista();
  }
  CercaCitta(): void {
    if (!this.ricerca || this.ricerca?.trim() === "") {
      alert("Stringa vuota, controlla l'input");
      return;
    }

    this.osmService.ListaCitta(this.ricerca).then(ris => {
      this.elenco = ris;
    })
  }

  SelezionaCitta(varLat: string, varLon: string, varNom: string): void {
    if (!varLat || !varLon) {
      alert("Errore nel recupero dei dati");
      return;
    }

    this.meteoService.DatiMeteo(varLat, varLon).then(ris => {
      if (!ris) {
        alert("Errore nel recupero dati meteo");
        return;
      }

      this.elenco = [];
      this.locationSelezionata = varNom.split(',')[0].trim();
      this.locationLatitudine = varLat;
      this.locationLongitudine = varLon;
      this.meteoDati = ris;
    })
  }
  AggiungiPreferito(): void {
    if (!this.locationSelezionata || !this.locationLatitudine || !this.locationLongitudine) {
      alert("Non posso aggiungere ai preferiti");
      return;
    }

    const pref: City = new City({
      nome: this.locationSelezionata,
      lat: this.locationLatitudine,
      lon: this.locationLongitudine
    })

    if (this.prefService.VerificaEsistenza(pref)) {
      alert("Preferito già presente in lista!")
      return;
    }

    if (this.prefService.Aggiungi(pref)) {
      alert("Preferito aggiunto con successo!");
      this.elencoPreferiti = this.prefService.Lista();
    }
    else
      alert("Errore nell'aggiunta nei preferiti");

  }
}
