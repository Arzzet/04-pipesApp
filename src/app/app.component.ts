import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  
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
