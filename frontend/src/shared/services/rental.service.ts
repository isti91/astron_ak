import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarRentModel } from "../models/car-rent.model";

@Injectable({
    providedIn: 'root'
})
export class RentalService {
    constructor(private http: HttpClient) { }

    public getCarList(): Observable<CarRentModel[]> {
        return this.http.get<CarRentModel[]>('car-rental/list');
    }
}