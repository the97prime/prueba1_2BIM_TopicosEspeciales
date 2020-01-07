import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public edad: number;
  public meses: number;
  public dias: number;

  public horaNac: number;
  public minNac: number;

  public horaTo: number;
  public minTo: number;

  //Anio del sistema
  myDate: String = new Date().toISOString();

  //fecha del sistema para calcular la edad
  anioSis: number = new Date().getFullYear();
  mesSis: number = new Date().getMonth();
  diaSis: number = new Date().getDay();
  horaSis: number =new Date().getHours();
  minSis: number =new Date().getMinutes();

  anioMe: number = new Date().setFullYear(1997, 10, 1);
  mesMe: number = new Date().setMonth(2019, 12);
  
  constructor() {
    

    this.meses = ((this.anioSis-1994)*12)+(this.mesSis-9);
    const timeDiff = Math.abs(Date.now()- this.anioMe);
    this.edad = Math.floor((timeDiff / (1000*3600 * 24))/365);
    this.dias = Math.floor((timeDiff) / (1000*3600 * 24))+30;

    this.horaNac = 18;
    this.minNac = 0;

    if(this.horaSis<this.horaNac){
      this.horaTo = (this.horaNac-this.horaSis)+((this.dias-1.5)*24);
      console.log("hora del sismeta mayor");
    }else if(this.horaSis>this.horaNac){
      this.horaTo = (this.horaSis-this.horaNac)+((this.dias-1.5)*24);
      console.log("hora del sismeta menor");
    }else{
      this.horaTo = (this.horaSis-this.horaNac);
      console.log("hora del sismeta igual");
    }

    this.minTo=(this.horaTo*60)+this.minSis;

  }
  

}