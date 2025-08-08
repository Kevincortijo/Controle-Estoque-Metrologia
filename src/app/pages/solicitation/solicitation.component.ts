import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-solicitation.component',
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule, MatSelectModule, ReactiveFormsModule
  ],
  templateUrl: './solicitation.component.html',
  styleUrl: './solicitation.component.scss'
})
export class Solicitation {
  toppings = new FormControl('');
  toppingList: string[] = ['HDMI', 'USB-C', 'RS232', 'DVI-RGB', 'RGB', 'ARDUINO', 'CABO OPTICAL', 'EXTENSÃO USB']

}
