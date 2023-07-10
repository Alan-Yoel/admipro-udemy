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
//servicios
import { SettingsService } from './services/settings/settings.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/service.index';
import { HttpClientModule } from '@angular/common/http';






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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [SettingsService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
