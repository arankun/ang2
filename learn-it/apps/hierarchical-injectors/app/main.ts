import {bootstrap}           from 'angular2/platform/browser';
import {HeroesListComponent} from './heroes-list.component';
import {HeroesService}       from './heroes.service';

bootstrap(HeroesListComponent, [HeroesService])

/* Documentation artifact below
// Don't do this!
bootstrap(HeroesListComponent, [HeroesService, RestoreService])
*/
