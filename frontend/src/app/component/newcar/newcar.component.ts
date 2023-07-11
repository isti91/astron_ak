import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss']
})
export class NewcarComponent implements OnInit{
  reactiveForm!: FormGroup;

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        carName: new FormControl(null),
        country: new FormControl(null),
      });
  }

  onSubmitCar(): void {
    console.log(this.reactiveForm);
  }
}
