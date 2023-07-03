import { Component } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent {
  constructor(){

    this.contarTres().then(
      mensaje => console.log("termino!", mensaje)
    )
    .catch(error => console.log('Error en la promesa', error))
  }

  contarTres(): Promise<boolean>{

    return new Promise((resolve: any, reject: any) =>{
      let contador = 0

      let itervalo = setInterval(()=>{

        contador +=1;

        if(contador === 3){
          resolve(true);
          clearInterval(itervalo)
        }
      }, 1000);

    });

    

  }


}
