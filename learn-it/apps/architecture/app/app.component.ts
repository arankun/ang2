import {Component} from 'angular2/core';
import {HeroListComponent} from './hero-list.component';
import {SalesTaxComponent} from './sales-tax.component';

@Component({
	selector: 'my-app',
	template: `
  <hero-list></hero-list>
  <sales-tax></sales-tax>
  `,
	directives: [HeroListComponent, SalesTaxComponent]
})
export class AppComponent { }