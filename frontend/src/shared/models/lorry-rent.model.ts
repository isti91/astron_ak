export interface LorryRentModel {
  id: number; //egyedi id
  licenseNumber: string; //rendszám
  carType: string; //típusa
  cargoVolume: number; //raktér térfogat
  technicalValidity: Date; //Műszaki érvényessége, formátum: YYYY/MM/DD
}
