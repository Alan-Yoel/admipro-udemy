import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export default class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription | any;

  constructor(){

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log("subs ", numero),
      error => console.error("error en el obs", error),
      () => console.log("el observador termino!")
      
    );

    

  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable <number>{
     return new Observable((observer: Subscriber <any> )=>{

      let contador = 0;

      let intervalo = setInterval (()=>{
        contador++;  

        const salida = {
          valor: contador
        };

        observer.next(salida);
       
        // if(contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();

        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error("Auxilio!")
        // }

      }, 1000)


    }).pipe(

      map( resp => resp.valor),
      filter( (valor, index)=> {
        if ((valor % 2) === 1) {
          //impar
          return true
        }else{
          //par
          return false
        }
      })
    );

    
  }



}
