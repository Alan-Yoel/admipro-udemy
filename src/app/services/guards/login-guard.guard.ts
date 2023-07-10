import { NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../service.index';


export class loginGuardGuard implements CanActivate {
  constructor(
                public _usuarioService: UsuarioService,
                public router: Router ){}
  canActivate(): any {

    if(this._usuarioService.estaLogueado()){
      console.log('PASO EL GUARD')
      return true;
    }else{
      console.log('Bloqueado por el guard')
      return false;
    }


    return true;
  }
}
// O implementa tu lógica de verificación de acceso aquí

@NgModule({})
export class ServiceModule {}
