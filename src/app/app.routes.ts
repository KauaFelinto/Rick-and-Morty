
import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AcountComponent } from './pages/acount/acount.component';
import path from 'path';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'character-detail/:id',
        title: 'Character',
        loadComponent: () => import('./pages/details/details.component').then((x) => x.DetailsComponent
    )
    },
    {
        path: '',
        component: LoginComponent,

    },
    {
        path: 'acount',
        component: AcountComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }

];
