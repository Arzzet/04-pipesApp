import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'iwo';
  nombreUpper: string = 'IWO';
  nombreCompleto: string = 'iwO przyByszEWski';

  fecha: Date = new Date();

}
