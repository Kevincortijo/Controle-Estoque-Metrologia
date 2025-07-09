import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  title = 'Controle-Estoque-Metrologia';
  hideSidebar = false;
  sidebarOpen = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const hideSidebarRoutes = ['/', '/login'];
      this.hideSidebar = hideSidebarRoutes.includes(event.urlAfterRedirects);

      if (this.hideSidebar) {
        this.sidebarOpen = false;
      } else {
        this.sidebarOpen = true; 
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}