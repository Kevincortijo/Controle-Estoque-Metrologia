import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { Sidebar } from '../components/sidebar/sidebar.component';
import { Login } from '../pages/login/login.component';
import { Moving } from '../pages/moving/moving.component';
import { Overview } from '../pages/overview/overview.component';
import { Register } from '../pages/register/register.component';
import { Table } from '../components/table/table.component';
import { Sidenav } from '../components/sidenav/sidenav.component';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'home', component: Home},
    {path:'moving', component: Moving},
    {path:'overview', component: Overview},
    {path:'register', component: Register},
    
    {path: 'sidebar-preview', component: Sidebar},
    {path: 'sidenav-preview', component: Sidenav},
    {path: 'table-preview', component: Table},
    
    {path:'',component:Login},
];
