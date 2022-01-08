import { Component, OnInit } from '@angular/core';
import { Color, Friden } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = true;

  orderBy: string = '';

  fridens: Friden[] = [
    {
      nombre: 'Andrew',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Belles',
      vuela: false,
      color: Color.blanco
    },
    {
      nombre: 'Deivids',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Gerlako',
      vuela: true,
      color: Color.blanco
    },
    {
      nombre: 'Iwo',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Oli',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Peibol',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Rug',
      vuela: false,
      color: Color.azul
    },
  ];

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.orderBy = valor;
    console.log(valor);
  }

}
