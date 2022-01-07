import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
  clientes: string[] = ['jose', 'iwo','merchan','myka','alex','marti'];
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

  // KeyValuePipe
  friden = {
    nombre: 'oli',
    edad: 23,
    direccion: 'calle falsa 123'
  }

  // JSON pipe
  fridens = [
    {
      nombre: 'oli',
      magia: true
    },
    {
      nombre: 'rug',
      magia: false
    },
    {
      nombre: 'medic',
      magia: true
    }
  ]

  // AsyncPipe

  miObservable = interval(5000); // emite los valores

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa terminada');
    }, 3500);
  });
}

