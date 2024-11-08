import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeteoService } from '../services/meteo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MeteoService]
})

export class HomeComponent implements OnInit {

  cityName = 'API_LOCATION';
  city: string[] = ["Berlino", "Milano", "Firenze", "Roma"]
  data = {
    city: '',
    information: '',
    temperature: '',
    conditions: '',
    humidity: '',
    wind: '',
    main: '',
    //  imageURL: ''
  }
  carath: any[] = [
    { temperature: "18 C°", vento: "30 km/h", humidity: "40%", condition: "cloudy" }
  ]
  preferiti: any

  constructor(private readonly meteoService: MeteoService) {

  }

  ngOnInit(): void {
    //service && preferiti
    this.loadData();

  }

  loadData() {
    if (this.cityName) {
      this.meteoService.fetchWeather(this.cityName).subscribe({

        next: (data: any) => {
          console.log(data);
          this.data.temperature = data.main.temp;
          this.data.conditions = data.main.conditions;
          this.data.humidity = data.main.humidity;
          this.data.city = data.name;
          // DATA TO VERIFYthis.data.information = data.main.feels_like;
          //DATA TOVERIFY this.data.wind = data.wind;
          // DATA OK this.data.imageURL =FROM JSONOPENWET data.weather[0].icon;

        },
      })
      error: (err: any) => {
        console.log('caricamento non riuscito', err);
      }

    }
  }

}
