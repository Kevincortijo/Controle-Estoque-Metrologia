import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component';
import { Login } from '../pages/login/login.component';
import { Moving } from '../pages/moving/moving.component';
import { Overview } from '../pages/overview/overview.component';
import { Register } from '../pages/register/register.component';
import { Report } from '../pages/report/report.component';
import { Solicitation } from '../pages/solicitation/solicitation.component';
import { Profile } from '../pages/profile/profile.component';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'home', component: Home},
    {path:'overview', component: Overview},
    {path:'moving', component: Moving},
    {path:'report', component: Report},
    {path:'register', component: Register},
    {path:'solicitation', component: Solicitation},
    {path:'profile', component: Profile},
        
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'**', redirectTo:'login'},
];
