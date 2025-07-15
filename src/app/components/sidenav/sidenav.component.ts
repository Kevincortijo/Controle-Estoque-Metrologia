import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavContent } from "../sidenav-content/sidenav-content.component";
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    SidenavContent,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class Sidenav {
  constructor(public router: Router){}
  
  isloginpage(): boolean {
    return this.router.url === '/login';
  }
}
