import { HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import MOCK_RESPONSE_CAR_LIST from '../mock-data/car-rent-list.json';
import MOCK_RESPONSE_LORRY_LIST from '../mock-data/lorry-rent-list.json';
import MOCK_RESPONSE_MOTOR_LIST from '../mock-data/motor-rent-list.json';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

    private readonly MOCK_RESPONSE_CAR_RENT = of(
        new HttpResponse({
            status: 200,
            statusText: 'OK',
            body: MOCK_RESPONSE_CAR_LIST
        })
    ).pipe(delay(300));

    private readonly MOCK_RESPONSE_LORRY_RENT = of(
        new HttpResponse({
            status: 200,
            statusText: 'OK',
            body: MOCK_RESPONSE_LORRY_LIST
        })
    ).pipe(delay(300));

    private readonly MOCK_RESPONSE_MOTOR_RENT = of(
        new HttpResponse({
            status: 200,
            statusText: 'OK',
            body: MOCK_RESPONSE_MOTOR_LIST
        })
    ).pipe(delay(300));

    private readonly MOCK_RESPONSE_ERROR = of(
        new HttpResponse({
            status: 500,
            statusText: 'ERROR',
            body: 'ERROR'
        })
    ).pipe(delay(300));

    intercept(request: HttpRequest<any>) {
        if (request.method === 'GET' && request.url.endsWith('car-rental/list')) {
            return this.MOCK_RESPONSE_CAR_RENT;
        } else if (request.method === 'GET' && request.url.endsWith('lorry-rent/list')) {
            return this.MOCK_RESPONSE_LORRY_RENT;
        } else if (request.method === 'GET' && request.url.endsWith('motor-rent/list')) {
            return this.MOCK_RESPONSE_MOTOR_RENT;
        } else {
            return this.MOCK_RESPONSE_ERROR;
        }
    }
}
