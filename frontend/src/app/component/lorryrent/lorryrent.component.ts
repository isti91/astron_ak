import { Component } from '@angular/core';
import { LorryRentModel } from 'src/shared/models/lorry-rent.model';
import { LorryRentService } from 'src/shared/services/lorry-rent.service';

@Component({
  selector: 'app-lorryrent',
  templateUrl: './lorryrent.component.html',
  styleUrls: ['./lorryrent.component.scss']
})
export class LorryrentComponent {
  displayedColumns: string[] = ['licenseNumber', 'carType', 'cargoVolume', 'technicalValidity', 'price'];
  lorryList!: LorryRentModel[];

  constructor(
  private lorryRentalService: LorryRentService) {
}

  ngOnInit(): void {
  this.lorryRentalService.getCarList().subscribe({
    next: lorries => { this.lorryList = lorries },
    complete: () => { console.log('SUCCESS, lista: ', this.lorryList) },
    error: () => console.log('ERROR')
  });
}
}
