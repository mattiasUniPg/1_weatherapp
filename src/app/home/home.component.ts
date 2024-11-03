import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  city: string[] = ["Berlino", "Milano","Firenze", "Roma"]
  carath: any[] = [
  { temperature:"18 C°", vento: "30 km/h",humidity: "40%",condition: "cloudy" }
  ]
  preferiti: any 
}
