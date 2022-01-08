import { Pipe, PipeTransform } from '@angular/core';
import { Friden } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(fridens: Friden[], orderBy: string = 'sin valor' ): Friden[] {
    
    switch (orderBy) {
      case 'nombre':
        return fridens.sort((a,b) => a.nombre > b.nombre ? 1 : -1 );
      case 'vuela':
        return fridens.sort((a,b) => a.vuela > b.vuela ? -1 : 1 );
      case 'color':
        return fridens.sort((a,b) => a.color > b.color ? 1 : -1 );
      default:
        return fridens;
    }
    
  }

}
