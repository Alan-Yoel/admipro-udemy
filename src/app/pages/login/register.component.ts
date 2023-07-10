
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import Swal from 'sweetalert2'




declare function init_plugins(): any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css'],
})
export class RegisterComponent {
  forma: FormGroup | any;

  constructor(

    public _usuarioService: UsuarioService,
    public router: Router
  ) {}

  sonIguales(campo1: string, campo2: string): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      let pass = group.get(campo1)?.value;
      let pass2 = group.get(campo2)?.value;

      if (pass === pass2) {
        return null;
        
      }

      return { sonIguales: true };
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup(
      {
        nombre: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl(false),
      },
      Validators.compose([this.sonIguales('password', 'password2')])
    );

    this.forma.setValue({
      nombre: 'test',
      correo: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true,
    })

  }
  registrarUsuario() {

    if(this.forma.invalid){

      return;
    }
    if( !this.forma.value.condiciones  ){
      Swal.fire('Importante', 'Debe aceptar los terminos', 'warning');
      return;
    }

    console.log('Forma valida ', this.forma.valid)

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
    );
    this._usuarioService.crearUsuario(usuario).subscribe(resp => this.router.navigate(['/login']))
  }
}
