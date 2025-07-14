import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavContent } from "../sidenav-content/sidenav-content.component";

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, SidenavContent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class Sidenav {

}
