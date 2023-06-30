import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTES } from './app.routes';


//Modulos
import { PagesModule } from './pages/pages.module';

//Componentes
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/login/register.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
