import {bootstrap}      from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HeroService}    from './hero.service';
import {BackendService} from './backend.service';
import {Logger}         from './logger.service';

bootstrap(AppComponent, [BackendService, HeroService, Logger]);
