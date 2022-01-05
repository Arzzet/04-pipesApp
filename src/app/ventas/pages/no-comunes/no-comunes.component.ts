import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  
  // i18nSelect
  nombre: string = 'Xuska';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['maria', 'pedro','','',''];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if(this.genero === 'femenino'){
      this.nombre = 'Iwo';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Xuska';
      this.genero = 'femenino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

}
