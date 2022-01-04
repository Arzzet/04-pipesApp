import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'los friden';
  valor: number = 1000;
  obj: Object = {
    nombre: 'friden',
    edad: 28
  };

  mostrarNombre(){
    console.log(this.nombre);
  }

}
