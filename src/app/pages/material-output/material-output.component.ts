import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-material-output',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './material-output.component.html',
  styleUrl: './material-output.component.scss'
})
export class MaterialOutput {
  selected: string = '';
  linhas: string[] = ['Linha 1', 'Linha 2', 'Linha 3'];
}

