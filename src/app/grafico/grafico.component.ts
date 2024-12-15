import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme, ChartAnnotationSettingsModel, ChartAllModule, DateTime } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { WeatherData } from '../models/weather-data';
import { LocationData } from '../models/location-data';
import { City } from '../models/city';
import { MeteoService } from '../services/meteo.service';
import { OpenMeteoService } from '../services/open-meteo.service';

@Component({
  selector: 'app-grafico',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ChartAllModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css',
  providers: [MeteoService]

})
export class GraficoComponent {
    
  ricerca?: string;
  elenco: LocationData[] = []
  elencoPreferiti: City[] = []
  locationSelezionata?: string;
  locationLatitudine?: string;
  locationLongitudine?: string;
  meteoDati?: WeatherData;
  
    public dataValues: Object[] = [];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        minimum : new Date(1910, 0, 1), maximum : new Date(2010, 0, 1),
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        labelFormat: '{value}C°',
        rangePadding: 'None',
        minimum: -20,
        maximum: 42,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public annotations: ChartAnnotationSettingsModel[] = [
        {
            content : '<div style=" font-size: 14px; font-weight: bold ; width: 80px ; padding: 5px; color: green ">Medium</div>', x: Browser.isDevice ? '12%' : '38%', y: Browser.isDevice ? '50%' :'47%' ,region:'Series'
        },
        {
            content : '<div style=" font-size: 14px; font-weight: bold ; width: 80px ; padding: 5px; color: blue ">Low</div>', x:'20%', y:'60%' ,region:'Series'
        },
        {
            content : '<div style=" font-size: 14px; font-weight: bold ; width: 80px ; padding: 5px; color: red ">High</div>', x: Browser.isDevice ? '80%' : '80%', y:'10%' ,region:'Series'
        },{
          content : '<div style=" font-size: 14px; font-weight: bold ; width: 80px ; padding: 5px; color: yellow ">Over</div>', x: Browser.isDevice ? '40%' : '60%', y: Browser.isDevice ? '20%' :'30%' ,region:'Series'
      },
      {
          content : '<div style=" font-size: 14px; font-weight: bold ; width: 80px ; padding: 5px; color: purple ">Under</div>', x:'10%', y:'95%' ,region:'Series'
      }
    ];
    public width: string = Browser.isDevice ? '100%' : '75%';
    public legend: Object = { visible: false };
    public segments: Object[] = [{
        value: 38,
        color: 'red'
    }, {
        value: 22,
        color: 'yellow'
    }, {
        value: 15,
        color: 'green'
    }, {
        value: 10,
        color: 'blue'
    }, {
        value: 1,
        color: 'purple'
  }];
    public tooltip: Object = {
        enable: true, shared: true,
        header: '<b>Temperature</b>',
        format: '${point.x} : <b>${point.y}</b>'
    };
    public load(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
       // custom code end
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        [ //            this.meteoDati?.hourly.temperature_2m?
            38, 41, 30, 40, 10, 33, 40, 40, 42, 40, 30, 20, 30, 30, 35, 20, 30, 20, 30, 5,
            35, 41, 20, 40, 41, 40, 41, 35, 35, 0, 30, 40, 40, 35, 40, 35, 40, 40, 50, 0,
            35, 30, 40, 40, 0, 30, 10, 30, 30, 40, 40, 50, 0, 38, 41, 40, 40, 30, 40, 40,
            20, 20, 20, 40, 30, 40, 40, 40, 40, 40, 10, 20, 50, 10, 30, 40, 30, 0, 0, 20,
            50, 40, 20, 40, 40, 40, 38, 20, 10, 40, 40, 30, 40, 40, 40, 20, 40, 40, 40, 33,
            0, 40, 50, 50, 0, 30, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ].map((value: number, index: number) => {
            this.dataValues.push({ XValue: new Date(1900 + index, 0, 1), YValue: value });
        });
    };
    public title: string = 'Hourly temperature in '+City.name;
    constructor(private meteoService: OpenMeteoService) {
    };
    
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

}
