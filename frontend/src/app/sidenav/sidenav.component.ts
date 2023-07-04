import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HeaderService } from 'src/shared/services/header-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  isShowSidenav: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.sidenavEmitter.subscribe(
      () => {
        this.isShowSidenav = !this.isShowSidenav;
      });
  }

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

}
