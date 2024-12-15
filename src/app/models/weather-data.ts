export class WeatherData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits;
    hourly: HourlyData;
  
    constructor(data: Partial<WeatherData>){
      this.latitude = data.latitude || 0;
      this.longitude = data.longitude || 0;
      this.generationtime_ms = data.generationtime_ms || 0;
      this.utc_offset_seconds = data.utc_offset_seconds || 0;
      this.timezone = data.timezone || '';
      this.timezone_abbreviation = data.timezone_abbreviation || '';
      this.elevation = data.elevation || 0;
      this.hourly_units = data.hourly_units || new HourlyUnits();
      this.hourly = data.hourly || new HourlyData();
    }
  }
  
  class HourlyUnits{
      time?: string;
      temperature_2m?: string;
      relative_humidity_2m?: string;
      wind_speed_10m?: string;
      precipitation?: string;
      weathercode?: string; 
      weatherDescriptions?: string;
  
      constructor(data: Partial<HourlyUnits> = {}){
          this.time = data.time || 'unixtime';
          this.temperature_2m = data.temperature_2m || '°C';
          this.relative_humidity_2m = data.relative_humidity_2m || '%';
          this.wind_speed_10m = data.wind_speed_10m || 'km/h';
          this.precipitation = data.precipitation || 'mm';
          this.weathercode = data.weathercode || 'wmo code';
          this.weatherDescriptions = data.weatherDescriptions || 'description';
      }
  }
  
  class HourlyData{
      time?: string[];
      temperature_2m?: number[];
      relative_humidity_2m: number[];
      wind_speed_10m: number[];
      precipitation?: number[];
      weathercode?: number[]; 
      weatherDescriptions?: string[];
  
      constructor(data: Partial<HourlyData> = {}){
          this.time = data.time || [];
          this.temperature_2m = data.temperature_2m || [];
          this.relative_humidity_2m = data.relative_humidity_2m || [];
          this.wind_speed_10m = data.wind_speed_10m || [];
          this.precipitation = data.precipitation || [];
          this.weathercode = data.weathercode || [];
          this.weatherDescriptions = data.weatherDescriptions || [];          
      }
  }
