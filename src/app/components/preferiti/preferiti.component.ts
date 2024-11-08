import { Component } from '@angular/core';
import { City } from '../../models/city';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../../services/meteo.service';

@Component({
  selector: 'app-preferiti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {
  
  preferiti: City[] = new Array();
  
  constructor(private service: City) {

  }
  
  ngOnInit(){
    this.preferiti = this.service.getAll();
  }
  
  elimina(varCity: string): void 
  {
    
    if(varCity != undefined &&  this.service.Delete(varCity))
      {
        alert("Citta rimossa con successo")
        this.preferiti = this.service.getAll();
      }
      
      else {
        alert("Errore cancellazione")
      }


  }
  
  ordinaCitta() {
    
  }

}
