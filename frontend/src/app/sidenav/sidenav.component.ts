import { Component, EventEmitter, Output } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  toggle() {
   this.sidenav.emit();
   }
}
