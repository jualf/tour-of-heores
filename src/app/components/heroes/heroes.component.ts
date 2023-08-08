import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/resource/heroes-db';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES

  heroeSeleccionado?:Hero

  seleccionarHeroe(hero:Hero):void {
    this.heroeSeleccionado = hero
  }

}
