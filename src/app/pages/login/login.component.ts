import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'models/usuario.model';

declare function init_plugins(): any;
declare const gapi: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string | any;
  recuerdame: boolean = false;
  auth2: any;

  constructor(public router: Router, public _usuarioService: UsuarioService) {}


  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }
  googleInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '442737206823-dilej5tevnrv61sovd7bocf5qeafmjs3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });

    
  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {}, (googleUser: any)=>{

      // let profile = googleUser.getBasicProfile()
      let token = googleUser.getAuthResponse().id_token

      this._usuarioService
        .loginGoogle(token)
        .subscribe((resp) => this.router.navigate(['/dashboard']));
    });
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    let usuario = new Usuario('', forma.value.email, forma.value.password);
    this._usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe((correcto) => this.router.navigate(['/dashboard']));

    // this.router.navigate(['/dashboard'])
  }
}
