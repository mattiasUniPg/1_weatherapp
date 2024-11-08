import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { models } from '../models/city';
import { fetchWeatherApi } from 'openmeteo';

const url = "https://api.open-meteo.com/v1/forecast";
// const HTTP1 = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
// 'https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}';
const URL = 'https://api.openweathermap.org/data/2.5/weather?q';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  city: City[] = new Array();

  constructor(private readonly httpClientService: HttpClient) {

     fetchData(cityName: string){
       //${URL}${cityName}${City.API_KEY}
       models.API_KEY
       return this.httpClientService.get('{URL}${cityName}${models.API_KEY}}')
     }  

    let losCity = localStorage.getItem("elenco_citta");
    if (!losCity)
      localStorage.setItem("elenco_citta", JSON.stringify([]))
    else
      this.city = JSON.parse(losCity);
  }

  renderWeather(weather: any) {
    console.log(weather);
    var queryContainer = document.querySelector("#weather-results");
    //create tag for city and information
    var city = document.createElement("h3");
    city.textContent = weather.name;
    //queryContainer.append(city);

    //details weather city
    var details = document.createElement("p");
    details.append("Temp: " + weather.main.temp + " C°");
    var humidity = document.createElement("p");
    humidity.append("Humidity: " + weather.main.humidity + " %");
    var wind = document.createElement("p");
    wind.append("Wind: " + weather.wind.speed + " km/h" + weather.wind.deg + " °");

    var weatherDetails = weather.weather[0]
    if (weatherDetails && weatherDetails.description) {
      var description = document.createElement("p");
      description.textContent = weatherDetails.description;
     // queryContainer.append(description);
    }
  }

  //fetch data weather for city
  fetchWeather(query: any) {
    var HTTP = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q= '+ query + '&appid={API key}';
    fetch(url)
      .then(response => response.json())
      .then(data => this.renderWeather(data));

  }
  //RICHIAMARE fetchWeather("Citta")

  //GRAFICO
  
  getChartInfo(){
return "OK";
//this.http.get('https://API,APIKEY,q='+ query +'time=24h');

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

  Delete(varCity: string | undefined): boolean {
    let losCity = localStorage.getItem("elenco_citta");
    if (losCity) {
      this.city = JSON.parse(losCity);

      for (let [id, item] of this.city.entries()) {
        if (item.city == varCity)
          this.city.splice(id, 1)
        localStorage.setItem("elenco_citta", JSON.stringify(this.city));
        return true;
      }
    }
    return false;
  }

}
