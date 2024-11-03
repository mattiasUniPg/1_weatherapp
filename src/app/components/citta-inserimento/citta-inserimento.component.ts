import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from '../../models/city';
import { MeteoService } from '../../services/meteo.service';
import { Router } from 'express';

@Component({
  selector: 'app-citta-inserimento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './citta-inserimento.component.html',
  styleUrl: './citta-inserimento.component.css'
})
export class CittaInserimentoComponent {
  cit: string | undefined;
  info: string | undefined;
  temp: number | undefined;
  cond: string | undefined;
  umid: number | undefined;
  win: number | undefined;

  constructor(private service: MeteoService, private router: Router) {

  }




  
  salva() : void {
    let sCity = new City(this.cit, this.info, this.temp, this.cond, this.umid, this.win);
    if(this.service.Insert(sCity))
    {
      alert("Operazione andata con successo")
      this.router.navigateByUrl("/preferiti");
    }
    else{
      alert("Errore")
    }


  }
}
