import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from '../../models/city';

@Component({
  selector: 'app-citta-inserimento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './citta-inserimento.component.html',
  styleUrl: './citta-inserimento.component.css'
})
export class CittaInserimentoComponent {
  cit!: string;
  info!: string;
  temp!: number;
  cond!: string;
  umid!: number;
  win!: number;

  constructor(private service: City) {

  }

  salva() : void {
    let sCity = new City(this.cit, this.info, this.temp, this.cond, this.umid, this.win);
    if(this.service.Insert(sCity)!=null)
      alert("Operazione andata con successo")
    else
      alert("Errore")


  }
}
