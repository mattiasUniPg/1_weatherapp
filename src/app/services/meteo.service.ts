import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

//PREFERITO
@Injectable({
  providedIn: 'root'
})
export class MeteoService {//PREFERITISERVICE
  cityBox: City[] = []; //models elenco
  
  constructor()//private readonly httpClientService: HttpClient
   {
    const contenutoLs = localStorage.getItem("preferiti_meteo");

    if(!contenutoLs)
      localStorage.setItem("preferiti_meteo", JSON.stringify( [] ));
    else
      this.cityBox = JSON.parse(contenutoLs);
  }
  Aggiungi(objPreferito: City): boolean{
    this.cityBox.push(objPreferito);
    localStorage.setItem("preferiti_meteo", JSON.stringify(this.cityBox));
    return true;
  }
  Lista(): City[]{
    const contenutoLS = localStorage.getItem("preferiti_meteo");
    return contenutoLS ? JSON.parse(contenutoLS) : [];
  }
  VerificaEsistenza(objPreferito: City): boolean{
    const contenutoLS = localStorage.getItem("preferiti_meteo");
    const elenco: City[] = contenutoLS ? JSON.parse(contenutoLS) : [];

    if(elenco.length == 0)
      return false;

    return elenco.some(p => 
      p.nome === objPreferito.nome &&
      p.lat === objPreferito.lat &&
      p.lon === objPreferito.lon)
  }
  //GRAFICO
  getChartInfo() {
    return "OK";
    //this.http.get('https://API,APIKEY,q='+ query +'time=24h');
  }
  EliminaPreferito(objPreferito: City): boolean{
    const contenutoLS = localStorage.getItem("preferiti_meteo");
    const elenco: City[] = contenutoLS ? JSON.parse(contenutoLS) : [];

    if(elenco.length == 0)
      return false;

    const indice = elenco.findIndex(p => 
      p.nome === objPreferito.nome &&
      p.lat === objPreferito.lat &&
      p.lon === objPreferito.lon)

    if(indice != -1){
      elenco.splice(indice, 1);
      localStorage.setItem("preferiti_meteo", JSON.stringify(elenco))
      return true;
    }

    return false;
  }
}
