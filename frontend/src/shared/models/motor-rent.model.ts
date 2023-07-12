export interface MotorRentModel {
    id: number; //egyedi id
    licenseNumber: string; //rendszám
    type: string; //típusa
    displacement: number; //hengerűrtartalom
    performance:number; //Motor teljesítménye lóerőben
    technicalValidity: Date; //Műszaki érvényessége, formátum: YYYY/MM/DD
  }
  