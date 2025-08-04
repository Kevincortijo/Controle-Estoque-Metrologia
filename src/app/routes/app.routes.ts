import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { Login } from '../pages/login/login.component';
import { Moving } from '../pages/moving/moving.component';
import { Overview } from '../pages/overview/overview.component';
import { Register } from '../pages/register/register.component';
import { Sidenav } from '../components/sidenav/sidenav.component';
import { Report } from '../pages/report/report.component';
import { Solicitation } from '../pages/solicitation/solicitation.component';
import { MaterialOutput } from '../pages/material-output/material-output.component';
import { Dashboard } from '../components/dashboard/dashboard.component';
import { UserRegistration } from '../pages/user-registration/user-registration.component';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'home', component: Home},
    {path:'overview', component: Overview},
    {path:'moving', component: Moving},
    {path:'report', component: Report},
    {path:'register', component: Register},
    {path:'solicitation', component: Solicitation},
    {path:'material-output', component: MaterialOutput},
    {path:'dashboard', component: Dashboard},
    {path:'user-registration', component: UserRegistration},

    
    {path: 'sidenav-preview', component: Sidenav},
    
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'**', redirectTo:'login'},
];
