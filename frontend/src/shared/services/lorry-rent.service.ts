import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LorryRentModel } from "../models/lorry-rent.model";


@Injectable({
    providedIn: 'root'
})
export class LorryRentService {
    constructor(private http: HttpClient) { }

    public getCarList(): Observable<LorryRentModel[]> {
        return this.http.get<LorryRentModel[]>('lorry-rent/list');
    }
}