import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { HttpClient } from '@angular/common/http';


const URL ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  city: City[] = new Array();

  constructor(private readonly httpClientService: HttpClient) {
    
   /* fetchData(cityName: string){
      //${URL}${cityName}${City.API_KEY}
      
      return this.httpClientService.get('')
    } https://www.youtube.com/watch?v=rbkWAgc_x2U&t=37s */

    let losCity = localStorage.getItem("elenco_citta");
    if (!losCity)
      localStorage.setItem("elenco_citta", JSON.stringify([]))
    else
      this.city = JSON.parse(losCity);
  }

  Insert(objCity: City): boolean {
    this.city.push(objCity);
    localStorage.setItem("elenco_citta", JSON.stringify(this.city));
    return true;       //SEMPRE VERO; sostituire API

  }
  getAll(): City {
    let losCity = localStorage.getItem("elenco_citta");
    return losCity ? JSON.parse(losCity) : [];
  
  }



}

