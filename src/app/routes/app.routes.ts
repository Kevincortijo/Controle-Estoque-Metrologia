import { Routes } from '@angular/router';
import { Home } from '../pages/home/home.component'
import { Sidebar } from '../components/sidebar/sidebar.component';
import { Login } from '../pages/login/login.component';
import { Moving } from '../pages/moving/moving.component';
import { Overview } from '../pages/overview/overview.component';
import { Register } from '../pages/register/register.component';

export const routes: Routes = [
    {
        path:'',
        component:Login
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'home',
        component: Home
    },
    {
        path:'moving',
        component:Moving
    },
    {
        path:'overview',
        component:Overview
    },
    {
        path:'register',
        component:Register
    },
    {
        path: 'sidebar-preview',
        component:Sidebar
    }
];
