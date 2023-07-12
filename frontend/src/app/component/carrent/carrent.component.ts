import { Component, OnInit } from '@angular/core';
import { CarRentModel } from 'src/shared/models/car-rent.model';
import { RentalService } from 'src/shared/services/rental.service';

@Component({
  selector: 'app-carrent',
  templateUrl: './carrent.component.html',
  styleUrls: ['./carrent.component.scss']
})
export class CarrentComponent implements OnInit {

	displayedColumns: string[] = ['licenseNumber', 'carVintage', 'carType', 'color', 'numberOfSeats', 'displacement', 'price'];
    carList!: CarRentModel[];

    constructor(
		private rentalService: RentalService) {
	}

    ngOnInit(): void {
		this.rentalService.getCarList().subscribe({
			next: cars => { this.carList = cars },
			complete: () => { console.log('SUCCESS, lista: ', this.carList) },
			error: () => console.log('ERROR')
		});
	}

}
