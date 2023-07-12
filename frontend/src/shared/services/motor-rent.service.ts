import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MotorRentModel } from "../models/motor-rent.model";


@Injectable({
    providedIn: 'root'
})
export class MotorRentalService {
    constructor(private http: HttpClient) { }

    public getCarList(): Observable<MotorRentModel[]> {
        return this.http.get<MotorRentModel[]>('motor-rent/list');
    }
}