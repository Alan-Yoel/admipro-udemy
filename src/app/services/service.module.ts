import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  loginGuardGuard,
} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    { provide: 'CanActivateFn', useValue: loginGuardGuard },
  ],
})
export class ServiceModule {}
