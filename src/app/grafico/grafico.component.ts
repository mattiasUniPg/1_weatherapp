import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { MeteoService } from '../services/meteo.service';
Chart.register(...registerables);

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {


  constructor(private service: MeteoService) {

  }

  chartdata: any;
  labeldata: any[] = [];
  timedata: any[] = [];
  colordata: any[] = [];

  ngOnInit(): void {

    this.service.getChartInfo().subscribe(result => {
      this.chartdata = result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length; i++){
          //console.log(this.chartdata[i]);
          this.labeldata.push(this.chartdata[i]
            .day24H);
            //^ AGGIUNGI CAMPO 24 H API OPEN METEO TEMP(X)
          this.timedata.push(this.chartdata[i]
              .datetime);
            //^ORARIO CICLO 12AM PM
          this.colordata.push(this.chartdata[i]
                .day24H);
        }
this.RenderChart(this.labeldata,this.timedata,this.colordata);
// this.RenderChart(this.labeldata,this.timedata,this.colordata,"pie","piechart");
      }


    });

    this.RenderChart();

  }

  RenderChart( //labeldata:any,timedata:any,colordata:any,type:any,id:any)
  ): undefined {

    /*
        const config = {
          type: 'line',
          data: data,
        };
        const labels = Utils.months({count: 24});
        const data = {
          labels: labels,
          datasets: [{
            label: 'My First Dataset',
            data: [-4, -5, -4, -3, -2, -3, -1, 0, 0, 0, 0, 2,
                        3, 5, 5, 7, 8, 10, 12, 15, 18, 11, 4] ,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        };
        */

    const myChart = new Chart("line", {
      type: 'line',
      data: {
        //labels piano x (orario 24h)
        labels: ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM',
          '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM'],
        datasets: [{
          label: '# of Votes',
          //data indica temp(x)
          data: [-4, -5, -4, -3, -2, -3, -1, 0, 0, 0, 0, 2,
            3, 5, 5, 7, 8, 10, 12, 15, 18, 11, 4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }


}
