/*export interface City {
  name: string | undefined;
  lat: number | Float32Array;
  lon: number | Float32Array;
  information: string | undefined;
  conditions: string | undefined;
  humidity: number | undefined;
  wind: number | undefined;
}*/
export class City {
  nome: string;
  lat: string;
  lon: string;

  constructor(data: Partial<City>){
      this.nome = data.nome || "";
      this.lat = data.lat || "";
      this.lon = data.lon || "";
  }
}