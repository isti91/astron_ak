import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class HeaderService {
    public sidenavEmitter: EventEmitter<any> = new EventEmitter<any>();
  }