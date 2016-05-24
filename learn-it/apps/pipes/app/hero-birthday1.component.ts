// Version #1
import {Component} from 'angular2/core'

@Component({
	selector: 'hero-birthday',
	template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthday {
	birthday = new Date(1988, 3, 15); // April 15, 1988
}
