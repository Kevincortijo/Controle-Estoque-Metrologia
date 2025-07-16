import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-report.component',
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class Report {
 selectedFormat: string = '';

  formats = [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel (.xlsx)', value: 'xlsx' },
    { label: 'CSV', value: 'csv' },
    { label: 'JSON', value: 'json' }
  ];

  export() {
    // Apenas simula exportação
    alert(`Exportando filtros como ${this.selectedFormat.toUpperCase()}...`);
  }
}
