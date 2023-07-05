import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { CarRentModel } from "../models/car-rent.model";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    private readonly MOCK_RESPONSE_CAR_RENT = of(
        new HttpResponse({
            status: 200,
            statusText: 'OK',
            body: MOCK_RESPONSE_CAR_LIST
        })
    ).pipe(delay(300));

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (request.method === 'GET' && request.url.endsWith('car-rental/list')) {
            return this.MOCK_RESPONSE_CAR_RENT;
        } else {
            //TODO: error handle
            return next.handle(request);
        }
    }
}

//teszt response json: car-rent
const MOCK_RESPONSE_CAR_LIST: CarRentModel[] = [
    {
        "id": 1,
        "licenseNumber": "ASD-123",
        "carVintage": 2015,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 2,
        "licenseNumber": "ASD-321",
        "carVintage": 2020,
        "carType": "OPEL Astra K",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 3,
        "licenseNumber": "IUZ-654",
        "carVintage": 2016,
        "carType": "Mercedes Benz E",
        "color": "white",
        "numberOfSeats": 5,
        "displacement": 2.0
    },
    {
        "id": 4,
        "licenseNumber": "ASD-123",
        "carVintage": 2016,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 5,
        "licenseNumber": "ASD-123",
        "carVintage": 2015,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 6,
        "licenseNumber": "ASD-123",
        "carVintage": 2015,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 7,
        "licenseNumber": "ASD-123",
        "carVintage": 2018,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 8,
        "licenseNumber": "ASD-123",
        "carVintage": 2009,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 9,
        "licenseNumber": "ASD-123",
        "carVintage": 2014,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 10,
        "licenseNumber": "ASD-123",
        "carVintage": 2014,
        "carType": "OPEL Astra J",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.7
    },
    {
        "id": 11,
        "licenseNumber": "PPL-332",
        "carVintage": 2012,
        "carType": "Volvo S80",
        "color": "black",
        "numberOfSeats": 5,
        "displacement": 1.9
    },
    {
        "id": 12,
        "licenseNumber": "LWE-996",
        "carVintage": 2012,
        "carType": "Volvo S60",
        "color": "blue",
        "numberOfSeats": 5,
        "displacement": 1.9
    },
    {
        "id": 13,
        "licenseNumber": "UJN-741",
        "carVintage": 2019,
        "carType": "Nissan",
        "color": "white",
        "numberOfSeats": 5,
        "displacement": 1.8
    },
    {
        "id": 14,
        "licenseNumber": "DER-945",
        "carVintage": 2019,
        "carType": "KIA",
        "color": "red",
        "numberOfSeats": 3,
        "displacement": 1.6
    },
    {
        "id": 15,
        "licenseNumber": "ZTD-852",
        "carVintage": 2013,
        "carType": "Mazda",
        "color": "grey",
        "numberOfSeats": 5,
        "displacement": 1.9
    },
];
