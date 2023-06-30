import {RouterModule ,Routes } from "@angular/router";

import { NopagesfoundComponent } from "./shared/nopagesfound/nopagesfound.component";

import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/login/register.component";



const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    
  
    {path: '**', component: NopagesfoundComponent },
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});



