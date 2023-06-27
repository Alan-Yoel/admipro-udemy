import {RouterModule ,Routes } from "@angular/router";


import { DashboardComponent } from "./pages/dashboard/dashboard.component";

import { ProgressComponent } from "./pages/progress/progress.component";
import { NopagesfoundComponent } from "./shared/nopagesfound/nopagesfound.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { PagesComponent } from "./pages/pages.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/login/register.component";



const appRoutes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
  
    {path: '**', component: NopagesfoundComponent },
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});


