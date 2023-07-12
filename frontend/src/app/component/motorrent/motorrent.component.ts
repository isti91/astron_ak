import { Component } from '@angular/core';
import { MotorRentModel } from 'src/shared/models/motor-rent.model';
import { MotorRentalService } from 'src/shared/services/motor-rent.service';

@Component({
  selector: 'app-motorrent',
  templateUrl: './motorrent.component.html',
  styleUrls: ['./motorrent.component.scss'],
})
export class MotorrentComponent {
  displayedColumns: string[] = [
    'licenseNumber',
    'type',
    'displacement',
    'performance',
    'technicalValidity',
  ];
  motorList!: MotorRentModel[];

  constructor(private motorRentalService: MotorRentalService) {}

  ngOnInit(): void {
    this.motorRentalService.getCarList().subscribe({
      next: (motors) => {
        this.motorList = motors;
      },
      complete: () => {
        console.log('SUCCESS, lista: ', this.motorList);
      },
      error: () => console.log('ERROR'),
    });
  }
}
