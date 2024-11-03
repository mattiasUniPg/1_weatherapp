export const models = {
  API_KEY: 'd3c83df3c7987b318ceb87d68d953401',
};
  
export class City {
  Insert(sCity: City) {
    throw new Error('Method not implemented.');
  }
    city: string | undefined;
    information: string | undefined;
    temperature: number | undefined;
    conditions: string | undefined;
    umidity: number | undefined;
    wind: number | undefined;


constructor(
    cit: string,
    info: string,
    temp: number,
    cond: string,
    umid: number,
    win: number 
){
    this.city = cit;
    this.information = info;
    this.temperature = temp;
    this.conditions = cond;
    this.umidity = umid;
    this.wind = win;
}

}