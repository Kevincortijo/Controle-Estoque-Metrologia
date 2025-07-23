import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class Overview {

}
