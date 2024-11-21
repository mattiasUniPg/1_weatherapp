###ONLY FOR PURPOSE PUBLIC;
###CREATE A WEBAPP FOR DISPLAY METEO SERVICE;
###DESCRIPTION: CREATE AN APP WITH FRAMEWORK ANGULAR THAT PERMIT TO DISPLAY METEO OF DIFFERENT COUNTRY CITY; UTILISE PUBLIC FREE API FROM ( https://open-meteo.com/ );
###_THE APPLICATION HAVE TO PERMIT OF SEARCH CITY, DISPLAY INFORMATIONS OF THAT CITY AND SAVE UPDATE INFORMATION IN THE SAVED CITY ( LOCAL STORAGE ); 
###_THIS PREFERENCES OF USER PERSIST OVER THE RESTART OF THE APPLICATION; 
###INTERFACE USER:: (SEARCH METEO CITY FROM API PUBLIC OPENMETEO.COM) AND RELATIVE BUTTON SEARCH; SECTION WITH THE INFORMATION OF THE CITY (TEMPERATURE CONDITION HUMIDITY WIND SPEED);
###_BUTTON TO ADD THE CITY AND RELATIVE INFORMATION TO PREFERITE; LIST OF ALL CITIES AND RELATIVE INFORMATIONS METEO;
###FUNCTIONALITY:: (SEARCH METEO INFORMATION, ADD CITY INFORMATIONS TO LOCALSTORAGE, UPDATE INFORMATIONS, REMOVE DELETE FROM LOCALSTORAGE) CRUD OPERATIONS;  
###EXTRA:: ADD A GRAPH THAT SHOWS THE TIMING AND TEMPERATURE(NEXT_24_HOURS) UTILIZED DIFFERENT ENDPOINT API'S OPEN METEO; ORDER CITIES PREFERITE STORAGE FROM TEMPERATURE; 

# 01Weatherapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## GENERATE component - ng generate component GRAFICO (.*[ts,css,html,]) add import to index.html
## ROUTE ARRAY OBJECT JS (approutes.ts); 
## GENERATE CLASS/CITY - ng generate class models/City (.ts spec.ts) city.ts classe riferimento 
## GENERATE SERVICE - ng generate service services/meteo (.ts)
## GENERATE COMPONENT - ng generate component components/inserimento (.*[ts,css,html,]) add#
## GENERATE COMPONENT -ng generate component components/preferiti (.*[ts,css,html,]) add#
## INSTALL npm install chart.js
 https://www.youtube.com/watch?v=yc-HnoMsgdI
 https://www.chartjs.org/docs/latest/charts/line.html
## API DEFINED
https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
## METRICHE
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid={API key}
# UNI
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
# COMPLESSE
https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
## COMPLETE
https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
## NPM EXTENSION OPENMETEP : ' npm install openmeteo '
## icon by https://www.iconfinder.com/weather-icons?price=free
## icon by https://icons8.com/icons
