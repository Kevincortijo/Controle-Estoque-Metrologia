import { Component } from '@angular/core';
import { Sidenav } from "./components/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  imports: [Sidenav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected title = 'Controle-Estoque-Metrologia';
}
