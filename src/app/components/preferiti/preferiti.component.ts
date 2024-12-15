import { Component } from '@angular/core';
import { City } from '../../models/city';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../../services/meteo.service';
import { WeatherData } from '../../models/weather-data';
import { LocationData } from '../../models/location-data';
import { OpenStreetMapService } from '../../services/open-street-map.service';
import { OpenMeteoService } from '../../services/open-meteo.service';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css',
  providers: [MeteoService]
})
export class PreferitiComponent {
  
  elenco: LocationData[] = []
  elencoPreferiti: City[] = []
  locationSelezionata?: string;
  locationLatitudine?: string;
  locationLongitudine?: string;
  meteoDati?: WeatherData;
  

  //https://fontawesome.com/v6/search?o=r&m=free&c=weather
  weatherDescriptions: { [key: number]: string } = {
    0: "Sereno",
    1: "Poco nuvoloso",
    2: "Poco nuvoloso",
    3: "Nuvoloso",
    45: "Nebbia",
    48: "Nebbia da brina",
    51: "Pioviggine leggera",
    53: "Pioviggine moderata",
    55: "Pioviggine intensa",
    61: "Pioggia leggera",
    63: "Pioggia moderata",
    65: "Pioggia intensa",
    66: "Pioggia ghiacciata leggera",
    67: "Pioggia ghiacciata intensa",
    71: "Nevicate leggere",
    73: "Nevicate moderate",
    75: "Nevicate intense",
    80: "Rovesci di pioggia leggeri",
    81: "Rovesci di pioggia moderati",
    82: "Rovesci di pioggia intensi",
    85: "Rovesci di neve leggeri",
    86: "Rovesci di neve intensi",
    95: "Temporali",
    96: "Temporali con grandine (leggeri)",
    99: "Temporali con grandine (intensi)"
  };

  weatherIcons: { [key: number]: string } = {
    0: "fa fa-sun-o",                      // Sereno
    1: "fa-solid fa-cloud-sun",            // Poco nuvoloso
    2: "fa-solid fa-cloud-sun",            // Poco nuvoloso
    3: "fa-solid fa-cloud",                // Nuvoloso
    45: "fa-solid fa-smog",                // Nebbia
    48: "fa fa-snowflake-o",               // Nebbia da brina
    51: "fa-solid fa-cloud-rain",          // Pioviggine leggera
    53: "fa-solid fa-cloud-showers-heavy", // Pioviggine moderata
    55: "fa-solid fa-cloud-showers-water", // Pioviggine intensa
    61: "fa-solid fa-cloud-rain",          // Pioggia leggera
    63: "fa-solid fa-cloud-showers-heavy", // Pioggia moderata
    65: "fa-solid fa-cloud-showers-water", // Pioggia intensa
    66: "fa-solid fa-cloud-meatball",      // Pioggia ghiacciata leggera
    67: "fa-solid fa-house-tsunami",       // Pioggia ghiacciata intensa
    71: "fa-solid fa-snowflake",           // Nevicate leggere
    73: "fa-solid fa-snowflake",           // Nevicate moderate
    75: "fa-solid fa-cloud-meatball",      // Nevicate intense
    80: "fa-solid fa-cloud-rain",          // Rovesci di pioggia leggeri
    81: "fa-solid fa-cloud-showers-heavy", // Rovesci di pioggia moderati
    82: "fa-solid fa-house-tsunami",       // Rovesci di pioggia intensi
    85: "fa-regular fa-snowflake",         // Rovesci di neve leggeri
    86: "fa-solid fa-cloud-meatball",      // Rovesci di neve intensi
    95: "fa-solid fa-bolt",                // Temporali
    96: "fa-solid fa-cloud-sun-rain",      // Temporali con grandine (leggeri)
    99: "fa-solid fa-cloud-bolt",          // Temporali con grandine (intensi)
  };

  constructor(private osmService: OpenStreetMapService,
      private meteoService: OpenMeteoService,
      private prefService: MeteoService) {
      }

ngOnInit() {
    this.elencoPreferiti = this.prefService.Lista();
    this.ordinaCitta();
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

  ConvertiUnixDataToItaliano(unixtimestamp: number | string): string {
    const timestamp = typeof unixtimestamp === 'string' ?
      parseInt(unixtimestamp, 10) : unixtimestamp;
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat('it-IT', {
      dateStyle: 'short',
      timeStyle: 'short'
    }).format(date);
  }

  ConvertiCodiciMeteo(code: number | string) {
    const codice = typeof code === 'string' ?
      parseInt(code) : code;

    if (this.weatherDescriptions.hasOwnProperty(codice))
      return this.weatherDescriptions[codice];

    return "Descrizione non disponibile";
  }

  ConvertiIconeMeteo(code: number | string) {
    const codice = typeof code === 'string' ?
      parseInt(code) : code;

    if (this.weatherIcons.hasOwnProperty(codice))
      return this.weatherIcons[codice];

    return "Descrizione non disponibile";
  }

  EliminaPreferito(varNome: string, varLat: string, varLon: string) {
    const pref: City = new City({
      nome: varNome,
      lat: varLat,
      lon: varLon
    });

    if (this.prefService.EliminaPreferito(pref)) {
      alert("Preferito eliminato con successo")
      this.elencoPreferiti = this.prefService.Lista();
    }
    else {
      alert("Preferito non eliminato")
    }

  }

  ordinaCitta() {
    this.elencoPreferiti.sort();
    if(this.meteoDati?.hourly.temperature_2m?.sort())
    this.elencoPreferiti = this.prefService.Lista();
  }
  
}
