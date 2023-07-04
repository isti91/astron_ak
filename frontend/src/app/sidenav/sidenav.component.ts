import { Component, EventEmitter, Output } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
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

   options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}
}
