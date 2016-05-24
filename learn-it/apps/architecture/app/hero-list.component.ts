import {Component, OnInit}   from 'angular2/core';
import {Hero}                from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/hero-list.component.html',
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
/*
export class HeroesComponent { ... }
*/
export class HeroListComponent implements OnInit {
  constructor(private _service: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.heroes = this._service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
